import { auth } from "@/services/firebase";
import { ref } from "vue";

export const user = ref(null);
export const initialised = ref(false);

auth.onAuthStateChanged(authUser => {
    user.value = authUser;
    initialised.value = true;
});

export const useLogin = () => {
    const email = ref("");
    const password = ref("");

    const login = async () => {
        const response = await auth.signInWithEmailAndPassword(
            email.value,
            password.value
        );

        if (!response.user) {
            throw Error("Invalid user.");
        }

        user.value = response.user;
    };

    return {
        email,
        password,
        login,
    };
};

export const useRegister = () => {
    const email = ref("");
    const password = ref("");

    const register = async () => {
        if (email.value === "" || password.value === "") {
            return;
        }

        const response = await auth.createUserWithEmailAndPassword(
            email.value,
            password.value
        );

        if (!response.user) {
            throw Error("Registration failed.");
        }

        user.value = response.user;
    };

    return {
        email,
        password,
        register,
    };
};

export const logout = async () => {
    await auth.signOut();
};
