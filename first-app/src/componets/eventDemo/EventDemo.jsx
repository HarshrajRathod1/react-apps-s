import { useState } from "react"

export function EventDemo(){

    
    return (
        <div className="container-fluid">
            <form>
                <button type="submit" formAction='https://www.amazon.com'>Amazon</button>
                <button type="submit" formAction='https://www.youtube.com'>YouTube</button>
            </form>
        </div>
    )
}