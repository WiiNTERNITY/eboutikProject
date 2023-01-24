const mongoose=require('mongoose');

const articleSchema=new mongoose.Schema(
    {
        uniqueId:{
            type:String,
            // require:true,
        },
        title:{
            type:String,
            require:true,
            minHeight: 3,
        },
        content:{
            type:String,
            required:true,
            minHeight: 10,
            maxHeight: 255,
        },
        image:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        like:[
            {
                uniqueId:{
                    type:String,
                    required:true,
                }
            }
        ],
        unlike:[
            {
                uniqueId:{
                    type:String,
                    required:true,
                }
            }
        ],
        comments:[
            {
                uniqueId:{
                    type:String,
                    required:true

                },
                content:{
                    type:String,
                    required:true,
                    minHeight: 2,
                    maxHeight: 255,
                },
                img:{
                    type:String,
                }
              
            }
        ],
        partages:[
            {
                uniqueId:{
                    type:String,
                    required:true,
                }
            }
        ]
    }
);

module.exports=mongoose.model('article',articleSchema);