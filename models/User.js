const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: { type: String, required: true, uniquie: true, trim: true },
        email: { type: String, required: true, uniquie: true, match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ },
        throughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return `${this.friendCount.length}`;
    });


const User = model('User', userSchema);

module.exports = User;