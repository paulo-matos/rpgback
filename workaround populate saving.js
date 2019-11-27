//https://html.developreference.com/article/19347457/Mongoose+Schema+reference+one+to+many

//So first off the data was coming to the function as a single object with multiple items inside it. What I had to do was write a function that created the looping action with a mongoose schema that included _id. Here is how the mongoose schema looked:
var ItemSchema = new Schema({
    _id: Schema.Types.ObjectId,
    description: { en_US: String },
    title: { en_US: String },
    type: String,
    value: Schema.Types.Mixed,
    items: [{ type: Schema.Types.Object, ref: 'ItemSchema' }]
});
//Now when I saved the data I could not just save the whole items object at once.Instead I need to walk though the items and save each one separate like this:
function nextItem(item) {
    var saveItem = Item({
        _id: new mongoose.Types.ObjectId,
        description: item.description,
        title: item.title,
        type: item.type,
        value: item.value
    });
    var fullItem = saveItem;
    if (item.items) {
        fullItem.items = [];
        item.items.forEach(function (item) {
            var tempItem = newItem(item);
            fullItem.items.push(tempItem);
        });
        return fullItem
    } else {
        return fullItem
    }
}