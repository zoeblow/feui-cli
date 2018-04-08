# {{ name }}

> {{ description }}

## 三步走

``` bash
# 依赖装一波
npm install

# 会在8080端口跑一个服务
npm run dev

# 生成生产环境代码
npm run build

# 生成生产环境代码并生成分析器报告
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```
