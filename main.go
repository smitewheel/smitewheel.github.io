package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

// just a 'go run main.go' is all that's needed to update the gods/cards

const (
	SmiteGodsCMSEndpoint string = "https://cms.smitegame.com/wp-json/smite-api/all-gods/1"

	GodCardFileStr string = "src/img/gods/%s"
	GodJSONFileStr string = "src/helpers/gods.json"
)

type God struct {
	Name string `json:"name"`
	Role string `json:"role"`
	Card string `json:"card,omitempty"`
}

func main() {
	log.Println("Starting.")
	resp, err := http.Get(SmiteGodsCMSEndpoint)
	if err != nil {
		log.Fatalf("failed to get gods: %v", err)
	}
	defer resp.Body.Close()

	bs, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("failed to read response: %v", err)
	}

	var gods []*God
	err = json.Unmarshal(bs, &gods)
	if err != nil {
		log.Fatalf("failed to unmarshal response body: %v", err)
	}

	for _, god := range gods {
		cardResp, err := http.Get(strings.ReplaceAll(god.Card, "'", "")) // handle chang'e.jpg
		if err != nil {
			log.Fatalf("failed to get card %s: %v", god.Card, err)
		}
		defer cardResp.Body.Close()

		fn := strings.ReplaceAll(filepath.Base(god.Card), "'", "") // chang'e.jpg
		f, err := os.Create(fmt.Sprintf(GodCardFileStr, fn))
		if err != nil {
			log.Fatalf("failed to create %s: %v", fn, err)
		}
		defer f.Close()

		_, err = io.Copy(f, cardResp.Body)
		if err != nil {
			log.Fatalf("failed to copy %s: %v", fn, err)
		}
		cardResp.Body.Close()
		f.Close()
		god.Card = fn // set the card to be the filename now, since we won't be requesting it
	}

	bs, err = json.MarshalIndent(gods, "", "  ")
	if err != nil {
		log.Fatalf("failed to marshal gods: %v", err)
	}
	f, err := os.Create(GodJSONFileStr)
	if err != nil {
		log.Fatalf("failed to create gods.json file: %v", err)
	}
	defer f.Close()
	_, err = f.Write(bs)
	if err != nil {
		log.Fatalf("failed to write gods.json file: %v", err)
	}
	log.Println("Done.")
}
