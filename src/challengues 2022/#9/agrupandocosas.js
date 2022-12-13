export default function groupBy(collection, it) {
  if (typeof (it) === 'function')
        return collection.reduce((result, item) => {
            const key = it(item);
            if (result[key]) result[key].push(item);
            else result[key] = [item];
            return result;
        }, {});

    return collection.reduce((result, item) => {
        const key = item[it];
        if (result[key]) result[key].push(item);
        else result[key] = [item];
        return result;
    }, {});
}
