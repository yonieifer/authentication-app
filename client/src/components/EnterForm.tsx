import { useState } from "react";

interface FormProps {
    onSubmit: (username: string, email: string, password: string) => void;
    action: string;
}

function EnterForm({ onSubmit, action }: FormProps) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input
                    type="emil"
                    placeholder="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="text"
                    placeholder="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </form>
                <button onClick={() => onSubmit(username, email, password)}>
                    {action.toUpperCase()}
                </button>
        </>
    );
}

export default EnterForm;
