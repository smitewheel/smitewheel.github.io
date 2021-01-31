import axios from 'axios'

export const getAllGods = () => {
    return axios.create(
        { baseURL: 'https://cms.smitegame.com/wp-json/smite-api/all-gods/1' }
    ).get()
}
