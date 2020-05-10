import React from "react"

const SpellList = ({ pageContext }) => {

  const aspects = {
    caster:  ['effect', 'duration', 'range', 'area'],
    target:  ['targets', 'saving_throw'],
  }

  return (
    <>
      <h1>{pageContext.name}</h1>
      <table>
        <tbody>
          {aspects.caster.map(aspect => {
            if(pageContext[aspect]) {
              return (<tr key={`aspect-${aspect}`}><th>{aspect}</th><td>{pageContext[aspect]}</td></tr>)
            }
          })}
        </tbody>

        <tbody>
          {aspects.target.map(aspect => {
            if(pageContext[aspect]) {
              return (<tr key={`aspect-${aspect}`}><th>{aspect.replace('_', '')}</th><td>{pageContext[aspect]}</td></tr>)
            }
          })}
        </tbody>
      </table>
      <div dangerouslySetInnerHTML={{__html: pageContext.description_formatted}} />
    </>
  )
}

export default SpellList
