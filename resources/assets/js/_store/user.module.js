import { userService } from "../_services";
import { router } from "../_helpers";

export const user = {
    namespaced: true,
    actions: {
        register({ dispatch, commit }, { name, email, password }) {
            userService.register(name, email, password)
                .then(
                    user => {
                        router.push('/login');
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    }
}
