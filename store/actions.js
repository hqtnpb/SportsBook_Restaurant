import axiosClient from "../resources/js/axiosClient";

export function fetchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword.value}`).then(({ data }) => {
        commit("setMeals", data);
    });
}
