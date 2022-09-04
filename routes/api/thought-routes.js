const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    delReaction
} = require('../../controllers/thoughtController.js');

router
.route('/')
.get(getAllThoughts)
.post(createThought);

router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router
.route('/:id/reactions')
.post(addReaction);

router.route('/:id/reactions/:reactionId').delete(delReaction);

module.exports = router;