import axios from 'axios'
// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'

const BASE_URL = '/api/bug/'


export const bugService = {
    query,
    getById,
    save,
    remove,
    getEmptyBug,
    getDefaultFilter
}

function query(filterBy = {}, sortBy = { type: 'severity', desc: 1 }) { 
    // { type: 'severity', desc: 1 }
    // const keySort = Object.keys(sortBy).join()
    console.log('filterBy:', filterBy);
    
    const filterQueryParams = `?title=${filterBy.title}&minSeverity=${filterBy.minSeverity}
    &labels=${filterBy.labels}&pageIdx=${filterBy.pageIdx}
    &sortType=${sortBy.type}&sortDesc=${sortBy.desc}`
    return axios.get(BASE_URL + filterQueryParams).then(res => res.data)
}

function getById(bugId) {
    return axios.get(BASE_URL + bugId).then(res => res.data)
}

function remove(bugId) {
    return axios.delete(BASE_URL + bugId).then(res => res.data)
}

function save(bug) {
    const method = bug._id ? 'put' : 'post'
    return axios[method](BASE_URL + 'save', bug).then(res => res.data)

}

function getEmptyBug(title = '', severity = '', description = '') {
    return { _id: '', title, severity, description, createdAt: Date.now() }

}

function getDefaultFilter() {
    return { title: '', minSeverity: '', label: '', pageIdx: 0 }
}
