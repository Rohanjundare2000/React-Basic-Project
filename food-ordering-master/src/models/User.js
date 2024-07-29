

import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 5) {
          new Error("password must be at least 5 characters");
          return false;
        }
      },
    },
    image:{type:String},
    phone:{type:String},
    streetAddress:{type:String},
    postalCode:{type:String},
    city:{type:String},
    country:{type:String},
    admin:{type:Boolean,default:false },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
