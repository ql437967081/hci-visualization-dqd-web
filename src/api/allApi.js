import { axios, handleFailure, handleResponse, backendModeConfig } from './util/default';
import { teamUrl, userMapUrl, commentsHeatWordsUrl } from './util/url';
import mockUserMap from '../component/user-map/mock-data';
import mockCommentsHeatWords from '../component/comments-heat-words/mock-data';

const searchTeam = (searchText, handleSuccess) => {
    if (!backendModeConfig) {
        const mockVal = (str, repeat = 1) => str.repeat(repeat);
        const mockData = !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
        setTimeout(function () {
            handleSuccess(mockData);
        }, 250);
        return;
    }
    axios.get(teamUrl, { params: { search_text: searchText } })
        .then(function (response) {
            handleResponse(response, handleSuccess);
        })
        .catch(function (error) {
            handleFailure(error);
        });
};

const getUserMap = (team, handleSuccess) => {
    if (!backendModeConfig) {
        setTimeout(function () {
            handleSuccess(mockUserMap);
        }, 300);
        return;
    }
    axios.get(userMapUrl, { params: { team } })
        .then(function (response) {
            handleResponse(response, handleSuccess);
        })
        .catch(function (error) {
            handleFailure(error);
        });
};

const getCommentsHeatWords = (team, handleSuccess) => {
    if (!backendModeConfig) {
        setTimeout(function () {
            handleSuccess(mockCommentsHeatWords);
        }, 300);
        return;
    }
    axios.get(commentsHeatWordsUrl, { params: { team } })
        .then(function (response) {
            handleResponse(response, handleSuccess);
        })
        .catch(function (error) {
            handleFailure(error);
        });
};

export {
    searchTeam,
    getUserMap,
    getCommentsHeatWords
};
