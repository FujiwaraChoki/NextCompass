import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import EmojiPicker from 'emoji-picker-react';
import deepai from 'deepai';

const Image = () => {
    const [tab, setTab] = useState(0);
    const tabNames = ['ChatGPT', 'DeepAI'];

    const [isLoading, setIsLoading] = useState(false);

    const [chatgptMessages, setChatGPTMessages] = useState([]);
    const [deepaiMessages, setYoucomMessages] = useState([]);

    const [emojiModal, setEmojiModal] = useState(false);

    const toggleEmojiModal = () => {
        setEmojiModal((prev) => !prev);
    };

    const [message, setMessage] = useState('');
    const sendMessage = async () => {
        setIsLoading(true);
        if (tab === 0) {
            // Send request to Dall e 2

        } else if (tab === 1) {
            // Send request to DeepAI
            deepaiMessages.push({
                message: message,
                type: 'user',
            });

            deepai.setApiKey('8a4974bb-336c-4082-8200-2441bcfec825');

            const resp = await deepai.callStandardApi("text2img", {
                text: message,
            });

            console.table(resp);

            deepaiMessages.push({
                message: resp.output_url,
                type: 'bot',
            });
        }

        setIsLoading(false);
    };

    return (
        <div className="rounded-g border bg-base-300 m-20">
            <div className="tabs tabs-boxed m-10">
                <a className={`tab ${tab === 0 && 'tab-active'}`} onClick={() => setTab(0)}>Dall-E 2</a>
                <a className={`tab ${tab === 1 && 'tab-active'}`} onClick={() => setTab(1)}>DeepAI</a>
                <a className="tab" onClick={() => {
                    if (tab === 0) {
                        setChatGPTMessages([]);
                    } else if (tab === 1) {
                        setYoucomMessages([]);
                    }
                }}>
                    <FiX />
                </a>
            </div>

            <div className="justify-center px-4 pt-16 pb-5 bg-base-200 relative h-max">
                <h1 className="text-4xl ml-5 -mt-10">{tabNames[tab]}</h1>

                <div className="h-80 flex-1 flex-grow overflow-y-auto px-4 py-2 m-5">
                    {(tab === 0 ? chatgptMessages : tab === 1 && deepaiMessages).slice(0).reverse().map((message, index) => {
                        return (
                            <div key={index} className={`chat ${message.type === 'user' ? 'chat-end' : 'chat-start'}`} >
                                <div className="chat-bubble chat-bubble-accent">{
                                    message.message.startsWith('http') ? (
                                        <img src={message.message} alt="Image" className="w-64 h-64" />
                                    ) : (
                                        message.message
                                    )
                                }</div>
                            </div>
                        );
                    }).reverse()}
                </div>

                {emojiModal && (
                    <div className="absolute bottom-0 right-0">
                        <EmojiPicker onEmojiClick={(emojiObject) => {
                            setMessage((prevMsg) => prevMsg + emojiObject.emoji);
                        }} />
                    </div>
                )}

                <form className="flex-1">
                    <label htmlFor="chat" className="sr-only">Describe your image...</label>
                    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                        {
                            isLoading && (
                                <div role="status">
                                    <svg aria-hidden="true" className="w-7 h-7 mr-1 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )
                        }
                        <button onClick={toggleEmojiModal} type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Add emoji</span>
                        </button>
                        <input onChange={(e) => {
                            setMessage(e.target.value);
                        }} value={message} id="chat" type="text" className={`block mx-4 p-3.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${isLoading && 'disabled'}`} placeholder="Descibe your image..."></input>
                        <button onClick={sendMessage} type="button" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Image;
