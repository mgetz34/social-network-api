const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        throughtText: { type: String, required: true, min: 1, max: 280 },
        createdAt: { type: Date, default: Date.now, get: (date) => new Date(date).toLocaleDateString() },
        username: { type: String, required: true },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true, 
        },
    }
);

thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return `${this.reactions.length}`;
    });


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;