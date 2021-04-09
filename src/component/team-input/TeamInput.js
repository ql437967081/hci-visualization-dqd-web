import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import { searchTeam } from '../../api/allApi';

let timeout;
let currentValue;

export default function TeamInput({ onSearchTeam }) {
    const [options, setOptions] = useState([]);

    const onSearch = (searchText) => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        currentValue = searchText;

        const fake = () => {
            console.log('onSearch', searchText);
            if (searchText) {
                searchTeam(searchText, data => {
                    if (currentValue === searchText) {
                        setOptions(data.map(value => ({ value })));
                        if (data.includes(searchText)) onSelect(searchText);
                    }
                });
            } else {
                onSelect('');
            }
        };

        timeout = setTimeout(fake, 300);
    };

    const onSelect = (data) => {
        console.log('onSelect', data);
        onSearchTeam(data);
    };

    return (
        <AutoComplete
            options={options}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="输入球队名称查询"
        />
    );
}
