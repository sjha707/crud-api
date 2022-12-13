// init value section 

const mongoose = require('mongoose');

// user schema 
const userSchema = mongoose.Schema({

    // inserted data into data base is 
    // {name , email , password }
   
    name:{
        type : String,
        required : [true , "Name Field Should Not be Blank"],
        // min : 3,
    },
    username :{
        type :String,
        default : false,
    },
    email :{
        type: String,
        required: [true, "Email Field Should Not be Blank"],
        trim : true,
        unique : [true, "This email is Already In Use "],
        lowercase : true,

    },
    password:{
        type :String ,
        min:6,
        required:[true,"Password Field Should Not be Blank"],
    },
    isActive :{
        type : Boolean,
        default : true,
    },
    createdOn :{
        type : Date,
        default : Date.now()
    },
    profilepicture :{
        type : String,
        default : "",
    },
    coverpicture:{
        type : String,
        default :"",
    },
    gender:{
        type :String,
        default : false,
    },
    byear:{
        type : Number,
        default:false,
        trim:true,
    },
    bmonth:{
        type : Number,
        default: false,
        trim:true,
    },
    bday:{
        type : Number,
        default : false,
        trim: true,
    },
    verified :{
        type : Boolean,
        default:false,
    },
    friends:{
        type : Array,
        default :[]
    },
    following :{
        type :Array,
        default: []
    },
    followers:{
        type :Array,
        default : []
    },
    request :{
        type :Array,
        default :[]
    },
    details :{
        bio:{
            type : String,
            default :false,
        },
        panname :{
            type : String,
            default : false,
        },
        jobtitle :{
            type :String,
            default:false,
        },
        workplace :{
            type: String,
            default : false,
        },
        highschool :{
            type:String,
            default : false,

        },
        college :{
            type : String,
            default : false,
        },
        currentcity:{
            type :String,
            default :false,
        },
        hometown:{
            type :String,
            default : false,
        },
        relationship:{
            type : String,
            default :false,
            // enum :['Single','In Relation','Married','Divorced'],
        },
        instagram:{
            type :String,
            default:false,
        },
        facebook:{
            type : String,
            default :false,
        },
        youtube:{
            type :String,
            default:false,
        }


    }



});

//create Model

mongoose.model('newusers', userSchema);

// module export section 

module.exports = mongoose.model('newusers');