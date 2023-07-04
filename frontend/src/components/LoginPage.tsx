import React, { FormEvent, useState } from 'react';
import {useNavigate} from "react-router-dom";
import tbImage from "../data/3519283.jpg"
import tbLogo from "../data/TastBuddiesLogo.png"

type Props = {
    login: (username: string, password: string) => Promise<void>
}
function LoginPage(props: Props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function loginOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await props.login(username, password);
            navigate('/userDetails');
            localStorage.setItem('user', username);
        } catch (error) {
            // Handle error
            console.error('Login failed', error);
        }
    }

    function navigateToRegistration() {
        navigate('/register');
    }

    return (
        <section className="h-screen">
            <div className="flex h-full justify-center">
                <div className="grid">

                    <div className="place-content-center mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <img
                            src={tbLogo}
                            className="scale-150"
                            alt="TasteBuddiesLogo.png"
                        />
                        <div
                            className="flex flex-col items-center justify-center">
                            <img
                                src={tbImage}
                                className="object-scale-down h-48 w-96"
                                alt="3519283.jpg"/>
                        </div>

                        <form className="flex flex-col items-center justify-center"
                              onSubmit={loginOnSubmit}>
                            <div className="flex flex-row items-center justify-center lg:justify-start mb-4">
                                <p className="mb-0 mr-4 text-lg font-bold">Sign In</p>
                            </div>

                            <div className="flex w-72 flex-col items-end justify-center gap-6">
                                <div className="relative h-10 w-full ">
                                    <input
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-800 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        value={username}
                                        onChange={(e)=> setUsername(e.target.value)}
                                    />
                                    <label
                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-800 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-800 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        User Name
                                    </label>
                                </div>
                                <div className="relative h-10 w-full ">
                                    <input
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-800 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        type="password"
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value)}
                                    />
                                    <label
                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-800 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-800 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Password
                                    </label>
                                </div>
                            </div>

                            <div className="text-center lg:text-left mt-4">
                                <button
                                    type="submit"
                                    className="px-4 py-1 text-sm text-Blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-bule-800 focus:ring-offset-2"

                                    data-te-ripple-color="light">
                                    Sign In
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-center mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Don't have an account?
                                    <button
                                        onClick={navigateToRegistration}
                                        className="text-danger transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700"
                                    > Sign Up</button
                                    >
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;