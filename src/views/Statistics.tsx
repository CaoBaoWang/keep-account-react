import React, {useState} from "react";
import Layout from "../components/Layout";
import {Category, CategorySection} from "./money/CategorySection";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import styled from "styled-components";
import day from 'dayjs'


const CategoryWrapper = styled.div`
  background: white;
`

const Group = styled.div`
  & > .group-item {
    font-size: 18px;

    & .group-name {
      background: #F5F5F5;
      padding: 9px 16px;
    }

    & > .category-item {
      background: white;
      padding: 9px 16px;
      display: flex;
      justify-content: space-between;

      & > .note {
        color: #999999;
        margin-left: 16px;
        margin-right: auto;
      }
    }

  }
`

function Statistics() {
    const [category, setCategory] = useState<Category>('-')
    const {records} = useRecords()
    const {getTagName} = useTags()

    const selectedRecords = records.filter(record => record.category === category)
    // group  ['2021年05月27日':[record1,record2]]
    const group: { [K: string]: RecordItem[] } = {}
    selectedRecords.forEach(record => {
        const groupName = day(record.createAt).format('YYYY年MM月DD日')
        if (group[groupName] === undefined) {
            group[groupName] = []
        }
        group[groupName].push(record)
    })


    const sortedGroup = Object.entries(group).sort((a, b) => {
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1

        return 0
    })


    const onChange = (c: Category) => {
        setCategory(c)
    }
    return (
        <Layout >
            <CategoryWrapper>
                <CategorySection value={category} onChange={onChange}/>
            </CategoryWrapper>
            <Group>
                {sortedGroup.map(group => {
                    return (
                        <div className="group-item" key={group[0]}>
                            <div className="group-name">
                                {group[0]}
                            </div>
                            {group[1].map(record => {
                                return (
                                    <div className="category-item" key={record.createAt}>
                                        <span>
                                            {
                                                record.tagIds
                                                    .reduce((result, tagId) => {
                                                        result.push(getTagName(tagId))
                                                        return result
                                                    }, [] as string[])
                                                    .join(',')
                                            }
                                        </span>
                                        {/*{record.tagIds.map(tagId => <span>{getTagName(tagId)}</span>)}*/}
                                        <span className="note">{record.note}</span>
                                        <span className="amount">{'￥' + record.amount}</span>

                                    </div>

                                )
                            })}
                        </div>
                    )
                })}
            </Group>
        </Layout>

    );
}


export default Statistics
