import React from 'react'
import downPng from './../../down.png'
import upPng from './../../up.png'
import nopeImg from './../../nope.png'
// добавить в проект иконки и импортировать
const downIcon = downPng
const upIcon = upPng
const noneIcon = nopeImg

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    const remover=(a:any)=>a.replace(/[0-1]/g, "")
    // console.log(remover(sort),'sort')
    // console.log(remover(up),'up')
    // console.log(remover(down),'down')
    // console.log(sort,'sort')
    // console.log(up,'up')
    // console.log(down,'down')
    // if(remover(sort)===remover(up) && remover(sort)===remover(down)) return ''
    if(sort === '') {
        return down
    }else if(sort!==down && sort===up){
            return ''
    } else if(sort===down){
        return up
    } else if(sort===up){
        return sort
    }if(sort!==down){
        return down
    }
    return sort
    // if(remover(up)===remover(down)) return down
    // if(remover(up)===remover(sort)) return 'developer'
    // if(remover(down)==='tech') return 'tech'

    // console.log(sort,down,up)

    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
