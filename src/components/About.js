import React from 'react'


export default function About() {
    console.log("called")
  return (
    <>
        <form className='container'> 
            <h1 className='heading my-4'>About Us</h1>

            <p>
            CaseChanger" is your ultimate online destination for effortless text case manipulation. This user-friendly tool empowers you to seamlessly convert text to various formats with just a few clicks. Explore its versatile features, including:
            </p>
            <ul>

                <li>UPPER CASE: Instantly transform text into uppercase letters.</li>
                <li>lower case: Convert text into lowercase letters effortlessly.</li>
                <li>CamelCase: Change text to camel case, capitalizing the first letter of each word (except the first word) and removing spaces.</li>
                <li>Sentence Case: Adjust text to sentence case, capitalizing the first letter of the sentence and converting the rest to lowercase.</li>
            </ul>
            <p>

                Whether you're a writer, developer, or anyone in need of efficient text formatting, "CaseChanger" is here to simplify your tasks. Enter your text, select your desired format, and witness the magic as your text is transformed in real-time.

                Experience the convenience and flexibility of text manipulation with "CaseChanger" - your trusted companion for all your text formatting endeavors.
            </p>
        </form>
    </>
  )
}
