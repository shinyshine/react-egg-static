import { server } from 'config/config.server'
import cookies from 'js-cookie';
import { post } from './request';

export function shareFileApi(params) {
    return post('/file/teaUploadFile', params)
}

export const uploadProps = {
    name: 'file',
    action: `${server}/file/upload`,
    headers: {
        'Authorization': cookies.get('_token_')
    }
    // onChange(info) {
    //   if (info.file.status !== 'uploading') {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (info.file.status === 'done') {
    //     message.success(`${info.file.name} file uploaded successfully`);
    //     console.log('info', info)
    //     console.log('success', info.file.response.id);
    //     file_id = info.file.response.id;

    //   } else if (info.file.status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    // },
  };