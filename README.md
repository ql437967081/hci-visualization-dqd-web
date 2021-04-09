# 后端API

## GET `/dqd/team`

根据关键词查询球队

参数：`searchText`

返回值：球队名列表，如搜索“皇家”，返回`['皇家马德里', '皇家社会', ...]`

## GET `/dqd/user-map`

找出该球队主队的用户地图

参数：`team // 若为空串，则查询所有用户`

返回值：

```json
[
  {"name": "北京", "value": 4822023},
  {"name": "天津", "value": 731449},
  {"name": "河北", "value": 6553255},
  {"name": "山西", "value": 2949131},
  {"name": "内蒙古", "value": 38041430},
  {"name": "辽宁", "value": 5187582},
  {"name": "吉林", "value": 3590347},
  {"name": "黑龙江", "value": 917092},
  {"name": "上海", "value": 632323},
  {"name": "江苏", "value": 19317568},
  {"name": "浙江", "value": 9919945},
  {"name": "安徽", "value": 1392313},
  {"name": "福建", "value": 1595728},
  {"name": "江西", "value": 12875255},
  {"name": "山东", "value": 6537334},
  {"name": "河南", "value": 3074186},
  {"name": "湖北", "value": 2885905},
  {"name": "湖南", "value": 4380415},
  {"name": "广东", "value": 4601893},
  {"name": "广西", "value": 1329192},
  {"name": "海南", "value": 5884563},
  {"name": "重庆", "value": 6646144},
  {"name": "四川", "value": 9883360},
  {"name": "贵州", "value": 5379139},
  {"name": "云南", "value": 2984926},
  {"name": "西藏", "value": 6021988},
  {"name": "陕西", "value": 1005141},
  {"name": "甘肃", "value": 1855525},
  {"name": "青海", "value": 2758931},
  {"name": "宁夏", "value": 1320718},
  {"name": "新疆", "value": 8864590},
  {"name": "台湾", "value": 2085538},
  {"name": "香港", "value": 19570261},
  {"name": "澳门", "value": 9752073}
]
```

## GET `/dqd/comments-heat-words`

找出该球队主队的评论热词

参数：`team // 若为空串，则查询所有用户`

返回值：

```json
[
  {"name": "龙头镇", "value": 111},
  {"name": "大埔镇", "value": 222},
  {"name": "太平镇", "value": 458},
  {"name": "沙埔镇", "value": 445},
  {"name": "东泉镇", "value": 456},
  {"name": "凤山镇", "value": 647},
  {"name": "六塘镇", "value": 189},
  {"name": "冲脉镇", "value": 864},
  {"name": "寨隆镇", "value": 652}
]
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
