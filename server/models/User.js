const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      // select false means find api kai andar pass ko bhejo mat
      select: false,
      validate: {
        validator: function (password) {
          // Password must contain at least one special character
          const regex = /[!@#$%^&*(),.?":{}|<>]/;
          return regex.test(password);
        },
        message: "Password must contain at least one special character",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
