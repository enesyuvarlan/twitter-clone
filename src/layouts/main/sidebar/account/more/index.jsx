import {useAccount, useAccounts} from "~/store/auth/hooks.js";
import classNames from "classnames";
import {setCurrentAccount} from "~/store/auth/actions.js";

export default function More({close}) {

  const currentAccount = useAccount()
  const accounts = useAccounts()

  return (
    <div>
      {accounts.map((account) => (
        <button
          type="button"
          disabled={currentAccount.id === account.id}
          onClick={() => {
            setCurrentAccount(account)
            close()
          }}
          className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors", {
            "hover:bg-[color:var(--background-third)]": currentAccount.id !== account.id,
            "cursor-default": currentAccount.id === account.id
          })}>
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt=""/>
          <div className="flex-1 mx-3 text-[15px]">
            <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
            <div className="text-[color:var(--color-base-secondary)]">
              @{account.username}
            </div>
          </div>
          {currentAccount.id === account.id && (
            <svg viewBox="0 0 24 24" fill="#00ba7c" className="mr-2 ml-3 h-[1.25rem]">
              <path
                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
              />
            </svg>
          )}
        </button>
      ))}
      <div className="h-px bg-[#38444d] my-3"/>
      <button
        className="py-3 px-4 text-left hover:bg-[color:var(--background-third)] transition-colors w-full  text-[15px] font-bold leading-[20px]">
        Add an existing account
      </button>
      <button
        className="py-3 px-4 text-left hover:bg-[color:var(--background-third)] transition-colors w-full  text-[15px] font-bold leading-[20px]">
        Manage accounts
      </button>
      <button
        className="py-3 px-4 text-left hover:bg-[color:var(--background-third)] transition-colors w-full  text-[15px] font-bold leading-[20px]">
        Log out @{currentAccount.username}
      </button>
    </div>
  )
}
