import React, { useEffect, useState } from "react";
import axios from "axios";
import OrganizationCard from "./organization-card";
import createOrgForm from "./create-org-form";
import { API_BASE_URL } from "../config";

import '../stylesheets/created-organizations.css';

export default function CreatedOrgs(props) {
    // PRODUCTION TODO --> currently getting all orgs, need to refactor to
    // get only user created orgs

    const [orgs, setOrgs] = useState(null);


    const fetchData = async () => {
        const request = await axios(`${API_BASE_URL}/role/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setOrgs(request.data);
    };


    useEffect(() => {
        fetchData();
    }, []);


    let orgCards;
    if (orgs) {
        orgCards = orgs.map((org, index) => {
            if (org.organizationId) {
                return (
                    <OrganizationCard
                        key={index}
                        history={props.history}
                        org={org.organizationId}
                        admin={org.role}
                    />
                );
            }
            return null;
        });
    }


    if (orgs === null) {
        return (
            <section className='created-orgs-container'>
                <h2>My Orgnizations</h2>
                <p>Looks like you haven't created any organiations yet...</p>

                <button onClick={() => props.setView(createOrgForm)}>
                    Create Organization
                </button>
            </section>
        );
    }


    return (
        <div>
            <section className='created-orgs-container'>
                <h2>My Orgnizations</h2>
                <div>{orgCards}</div>
            </section>
        </div>
    );

}
