const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                username: username,
            });

            localStorage.setItem("user", JSON.stringify(user));
            alert("Registered and details saved successfully");
        } catch (error) {
            console.error("Registration Error:", error);
            alert(`Registration failed: ${error.message}`);
        }
    } else {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("user", JSON.stringify(auth.currentUser));
            alert("Logged in successfully");
        } catch (error) {
            console.error("Login Error:", error);
            alert(`Login failed: ${error.message}`);
        }
    }
};
