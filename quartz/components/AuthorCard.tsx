import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AuthorCard = (_props: QuartzComponentProps) => {
  return (
    <div class="author-card">
      <div class="author-avatar">
        <img
          src="https://avatars.githubusercontent.com/u/190089270?v=4"
          alt="Victor Cha"
        />
      </div>
      <div class="author-info">
        <h4>차윤경 Victor Cha</h4>
        <p>
          Honeywell Key Initiatives Lead
          <br />
          연구자
        </p>
      </div>
      <div class="author-links">
        <a href="https://board.ykcha.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
          </svg>
          게시판
        </a>
        <a href="https://www.linkedin.com/in/yoonkyungcha" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
        <a href="https://github.com/Victor2you" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  )
}

export default (() => AuthorCard) satisfies QuartzComponentConstructor
