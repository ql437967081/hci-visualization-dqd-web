import { axios, handleFailure, handleResponse, backendModeConfig } from './util/default';
import { teamUrl, userMapUrl, commentsHeatWordsUrl, commentsTimeUrl } from './util/url';
import mockUserMap from '../component/user-map/mock-data';
import mockCommentsHeatWords from '../component/comments-heat-words/mock-data';
import area from '../component/area-comments-time/area';

const searchTeam = (searchText, handleSuccess) => {
    if (!backendModeConfig) {
        const mockVal = (str, repeat = 1) => str.repeat(repeat);
        const mockData = !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
        setTimeout(function () {
            handleSuccess(mockData);
        }, 250);
        return;
    }
    axios.get(teamUrl, { params: { searchText } })
        .then(function (response) {
            handleResponse(response, handleSuccess);
        })
        .catch(function (error) {
            handleFailure(error);
        });
};

const getUserMap = (team, handleSuccess) => {
    if (!backendModeConfig || !team) {
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
    if (!backendModeConfig || !team) {
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

const getCommentsTime = (team, handleSuccess) => {
    if (!backendModeConfig) {
        const mockTimeNum = [];
        for (let i = 0; i < 24; i++) mockTimeNum.push(Math.round(Math.random() * 1000));
        setTimeout(function () {
            handleSuccess(mockTimeNum);
        }, 300);
        return;
    }
    axios.get(commentsTimeUrl, { params: { team, area: false } })
        .then(function (response) {
            handleResponse(response, handleSuccess);
        })
        .catch(function (error) {
            handleFailure(error);
        });
};

const getAreaCommentsTime = (handleSuccess) => {
    if (!backendModeConfig) {
        const mockAreaTimeNum = {};
        area.forEach(p => {
            const mockTimeNum = [];
            for (let i = 0; i < 24; i++) mockTimeNum.push(Math.round(Math.random() * 1000));
            mockAreaTimeNum[p] = mockTimeNum;
        });
        setTimeout(function () {
            handleSuccess(mockAreaTimeNum);
        }, 300);
        return;
    }
    axios.get(commentsTimeUrl, { params: { area: true } })
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
    getCommentsHeatWords,
    getCommentsTime,
    getAreaCommentsTime
};
