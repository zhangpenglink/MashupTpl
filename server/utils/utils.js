/*
* 常用工具
* */
module.exports = {
    response(result, ctx) {
        let obj = {
            code: result ? 0 : 1,
            data: result
        }
        ctx.body = obj;
    }
};