/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { Table, Space, Popconfirm, Tag} from 'antd';
import { useRouter } from 'next/router';
// import { useMutation } from "@apollo/client";
// import { DELETE_ADDRESS } from '../../../apollo/shipping/shipping';
// import { useSelector, useDispatch } from 'react-redux';
// import * as actions from '../../../store/shipping/action';
import {addressess} from '../../../../../data/data';
const AddressTable = props => {

    const router = useRouter();
    // const dispatch = useDispatch();
    // const [getAddresses, { data, loading, error }] = useLazyQuery(GET_ADDRESSES);
    // const [deleteAddress, { data }] = useMutation(DELETE_ADDRESS);
    // const userId = useSelector(({ auth }) => auth.userId);
    // const addressesRaw = useSelector(({ shipping }) => shipping.addresses);
    const addressesRaw = addressess.items;
    const [addresses, setAddresses] = useState([]);
    const [rowSetting, setRowSetting] = useState(null);


    useEffect(() => {
        if (props.type === null) {
            setRowSetting(null)
        } else if (props.type === "SHIPPING") {
            setRowSetting({
                type: "radio",
                ...rowSelection,
            })
        } else if (props.type === "BILLING") {
            setRowSetting({
                type: "radio",
                ...rowSelection,
            })
        }
    }, [props.type]);

    // useEffect(() => {
    //     // console.log(data)
    //     if (data && data.accountAddressDelete) {
    //         dispatch(actions.setAddresses(data.accountAddressDelete));
    //     }
    // }, [data])

    useEffect(() => {
        // console.log(addressesRaw);
        if (addressesRaw && addressesRaw.length != 0) {
            const ad = [];
            addressesRaw.map((a, index) => {
                const tags = []
                a.isDefaultShippingAddress ? tags.push("shipping") : null
                a.isDefaultBillingAddress ? tags.push("billing") : null
                // console.log(tags)
                ad.push({
                    ...a,
                    key: index,
                    tags: tags

                })
            });
            setAddresses(ad);
        }
    }, [addressesRaw])

    // useEffect(() => {
    //     console.log(userId)
    //     getAddresses({ variables: { userId: userId } })
    // }, [userId])

    const columns = [
        {
            title: 'Contact Person',
            dataIndex: 'firstName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
        {
            title: 'Company',
            dataIndex: 'companyName',
        },
        {
            title: 'Province',
            dataIndex: 'streetAddress1',
        },
        {
            title:"Tags",
            dataIndex:"tags",
            key:"tags",
            render: tags => (
                <span>
                  {tags.map(tag => {
                    return (
                      <Tag color="blue" key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </span>
              ),
         },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) =>
                3 >= 1 ? (
                    <Space size="middle">
                        <Popconfirm className={{zIndex: 1000}} title="Sure to Edit?" onConfirm={() => {
                            props.editAddress(record)
                        }}>
                            <a style={{color: '#1961A5'}}>Edit</a>
                        </Popconfirm>
                        <Popconfirm title="Sure to delete?" onConfirm={() => deleteAddress({ variables: { id: record.id } })}>
                            <a style={{color:'#dd2400'}}>Delete</a>
                        </Popconfirm>
                    </Space>
                ) : null,
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            const sr = selectedRows[0];
            // delete sr.key;
            props.selectRow(sr);
        },
        getCheckboxProps: (record) => ({
            disabled: record.firstName === 'Disabled User',
            // Column configuration not to be checked
            firstName: record.firstName,
        }),
    };
    return (
        <Table
            rowSelection={rowSetting}
            columns={columns}
            dataSource={addresses}
        />
    )
}

export default AddressTable;