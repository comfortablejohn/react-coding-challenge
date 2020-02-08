import feedJson from './feed.json';

function mockFetch(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(feedJson);
        }, 500);
    })
}

function makeApi() {
    const cache = {};

    function filterCategory(feed, category) {
        return feed.entries.filter(entry => entry.programType == category);
    }

    function fetchInCategory(category) {
        if (cache[category]) {
            return Promise.resolve(cache[category]);
        }

        return mockFetch(`/api/category/${category}`).then(feed => {
            const items = filterCategory(feed, category);
            if (!(items && items.length)) {
                return Promise.reject('Unkown category');
            }
            cache[category] = items;
            return cache[category];
        })
    }

    return {
        fetchInCategory,
    };
};

const api = makeApi();
export default api;