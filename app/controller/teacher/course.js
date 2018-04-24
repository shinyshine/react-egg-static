module.exports = app => {
    return class teaCourseController extends app.Controller {
        async page() {
            const { ctx } = this;
            await ctx.renderClient('course/course.js', { url: ctx.url });
        }

        async renderClassPage() {
            const { ctx } = this;
            console.log(ctx.query)
            // const homework = {
            //   id: '1',
            //   list: [{
            //     key: '1',
            //     name: '罗晓彤',
            //     parent_id: 1,
            //     stu_id: '20141002418',
            //     h_id: 132,
            //     score: 0,
            //     status: 0,
            //     remarks: 'New York No. 1 Lake Park',
            //     title: '我的作业标题，放在弹框header',
            //     content: '我的作业内容，在弹框中间',
            //     comment: '这是老师的点评这是老师的点评这是老师的点评这是老师的点评',
            //     files: [{
            //       filename: '数据结构第三次作业20141002418.doc',
            //       link: 'https://www.baidu.com'
            //     }]
            //   }, {
            //     key: '2',
            //     name: '李素珍',
            //     parent_id: 1,
            //     stu_id: '20141002423',
            //     h_id: 254,
            //     score: 0,
            //     status: 0,
            //     remarks: 'London No. 1 Lake Park',
            //     title: '我的作业标题，放在弹框header',
            //     content: '我的作业内容，在弹框中间',
            //     comment: '这是老师的点评这是老师的点评这是老师的点评这是老师的点评',
            //     files: [{
            //       filename: '数据结构第si次作业20141002418.doc',
            //       link: 'https://www.baidu.com'
            //     }]
            //   }, {
            //     key: '3',
            //     name: '李知恩',
            //     parent_id: 1,
            //     stu_id: '20141002476',
            //     h_id: 365,
            //     score: 0,
            //     status: 0,
            //     remarks: 'Sidney No. 1 Lake Park',
            //     title: '我的作业标题，放在弹框header',
            //     content: '我的作业内容，在弹框中间',
            //     comment: '这是老师的点评这是老师的点评这是老师的点评这是老师的点评',
            //     files: [{
            //       filename: '数据结构第wu次作业20141002418.doc',
            //       link: 'https://www.baidu.com'
            //     }]
            //   }]
            // }

            const result = {};

            // const list = [
            //   {
            //     id: 1,
            //     title: '数据结构第七次作业，',
            //     content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
            //     deadline: '2018-3-23'
            //   },
            //   {
            //     id: 2,
            //     title: '数据结构第六次作业，',
            //     content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
            //     deadline: '2018-3-23'
            //   },
            //   {
            //     id: 3,
            //     title: '数据结构第五次作业，',
            //     content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
            //     deadline: '2018-3-23'
            //   },
            //   {
            //     id: 4,
            //     title: '数据结构第四次作业，',
            //     content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
            //     deadline: '2018-3-23'
            //   },
            //   {
            //     id: 5,
            //     title: '数据结构第三次作业，',
            //     content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
            //     deadline: '2018-3-23'
            //   },
            //   {
            //     id: 6,
            //     title: '数据结构第二次作业，',
            //     content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
            //     deadline: '2018-3-23'
            //   },
            //   {
            //     id: 7,
            //     title: '数据结构第一次作业，',
            //     content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
            //     deadline: '2018-3-23'
            //   }
            // ]


            const list = [
              {
                filename:'Jessy_HSBC.doc',
                tea_id:20141002412,
                create_time:'2018-04-13 08:04:07',
                class_id:23,
                file_id:'56db8e9f08ba43d8b2ed15c13ecef41c',
                end_time:'2018-04-14 00:00:00',
                task_id:8,
                tea_name:'tTracy',
                title:'第三章作业',
                content:'课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
                url:'/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc'
              },
              {
                filename:'Jessy_HSBC.doc',
                tea_id:20141002412,
                create_time:'2018-04-13 08:04:07',
                class_id:23,
                file_id:'56db8e9f08ba43d8b2ed15c13ecef41c',
                end_time:'2018-04-14 00:00:00',
                task_id:16,
                tea_name:'tTracy',
                title:'第三章作业',
                content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
                url:'/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc'
              },
              {
                filename:'Jessy_HSBC.doc',
                tea_id:20141002412,
                create_time:'2018-04-13 08:04:07',
                class_id:23,
                file_id:'56db8e9f08ba43d8b2ed15c13ecef41c',
                end_time:'2018-04-14 00:00:00',
                task_id:17,
                tea_name:'tTracy',
                title:'第三章作业',
                content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
                url:'/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc'
              },
              {
                filename:'Jessy_HSBC.doc',
                tea_id:20141002412,
                create_time:'2018-04-13 08:04:07',
                class_id:23,
                file_id:'56db8e9f08ba43d8b2ed15c13ecef41c',
                end_time:'2018-04-14 00:00:00',
                task_id:18,
                tea_name:'tTracy',
                title:'第三章作业',
                content: '课本666-3333页，弟3，4，5题，以文档的方式提交，希望同学们能准时交，',
                url:'/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc'
              }
            ]

            result[list[0].task_id] = [
              {
                stu_id:20141002426,
                filename:'CareerFrog_简历模板_中文(1).docx',
                create_time:'2018-04-09 23:45:32',
                grade: 0,
                file_id:'4242541de6bf4f1cafb38569c3ba78ad',
                class_id:21,
                stu_name:'diang',
                task_id:8,
                submit_tid:9,
                url:'/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx'
              }, {
                stu_id:20141002426,
                filename:'CareerFrog_简历模板_中文(1).docx',
                create_time:'2018-04-09 23:45:32',
                grade: 1,
                file_id:'4242541de6bf4f1cafb38569c3ba78ad',
                class_id:21,
                stu_name:'diang',
                task_id:8,
                submit_tid:19,
                url:'/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx'
              }, {
                stu_id:20141002426,
                filename:'CareerFrog_简历模板_中文(1).docx',
                create_time:'2018-04-09 23:45:32',
                grade: 2,
                file_id:'4242541de6bf4f1cafb38569c3ba78ad',
                class_id:21,
                stu_name:'diang',
                task_id:8,
                submit_tid:29,
                url:'/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx'
              }, {
                stu_id:20141002426,
                filename:'CareerFrog_简历模板_中文(1).docx',
                create_time:'2018-04-09 23:45:32',
                grade: 3,
                file_id:'4242541de6bf4f1cafb38569c3ba78ad',
                class_id:21,
                stu_name:'diang',
                task_id:8,
                submit_tid:39,
                url:'/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx'
              }
            ]
            
            await ctx.render('class/class.js', { url: ctx.url, homework: result, list, result })
        }
    };
};