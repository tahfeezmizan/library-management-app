import { model, Schema } from "mongoose";

const booksSchema = new Schema<BooksDemo>({
    title : { type: String , required : true },
    author : { type: String , required : true },
    genre : { 
        type: String , 
        required : true ,
        enum: [ "FICTION", "NON_FICTION", "SCIENCE", "HISTORY" , "BIOGRAPHY" , "FANTASY"]
    },
    isbn : { type: String , required : true } ,
    description : { type: String },
    copies : {type : Number , required : true} ,
    available:{ type: Boolean , default: true },
},
 {
    timestamps: true, 
  }
)

const Books = model<BooksDemo>("books" , booksSchema)

export default Books;