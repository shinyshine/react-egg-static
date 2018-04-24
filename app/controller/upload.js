// const fs = require('fs')
// const path = require('path')
// const Controller = require('egg').Controller

// const awaitWriteStream = require('await-stream-ready').write;
// const sendToWormhole = require('stream-wormhole')

// const download = require('image-downloader')

// class UploadController extends Controller {
//     constructor(ctx) {
//         super(ctx);
//     }
// }


module.exports = app => {
    return class uploadController extends app.Controller {
        async page() {
            const { ctx } = this;
            await ctx.renderClient('upload/upload.js');
        }
    }
}