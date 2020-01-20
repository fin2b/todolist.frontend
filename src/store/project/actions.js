export default {
  asyncSetProject(context, payload) {
    return context.commit('setProject', payload);
  }
};