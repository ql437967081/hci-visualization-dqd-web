import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

export default function TeamInput({ onSearchTeam }) {
    const [options, setOptions] = useState([]);

    const onSearch = (searchText) => {
        console.log('onSearch', searchText);
        const newOptions = !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
        setOptions(newOptions);
        if (!searchText || newOptions.map(({ value }) => value).includes(searchText)) onSelect(searchText);
    };

    const onSelect = (data) => {
        console.log('onSelect', data);
        onSearchTeam(data);
    };

    return (
        <AutoComplete
            options={options}
            style={{
                width: 200,
            }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="请输入球队名称"
        />
    );
}
