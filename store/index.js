import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            //asyncronus data thats loaded once and then accessable through all pages
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                    vuexContext.commit('setPosts', [
                        { 
                            id: '1',
                            title: "Post 1",
                            previewText: "Preview 1",
                            thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                          },
                          { 
                            id: '2',
                            title: "Post 2",
                            previewText: "Preview 2",
                            thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                          },
                          { 
                            id: '3',
                            title: "Post 3",
                            previewText: "Preview 3",
                            thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                          }
                    ])
                    resolve();
                    },1500);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            loadPostById: (state) => (id) => {
                return state.loadedPosts.find(post => post.id === id)
            }
        }
    })
}

export default createStore