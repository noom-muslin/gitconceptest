        shareHolders: personalenlites.map((company, index) => {
            return {
                index: index + 1,
                company_code: company.company_code,
                company_name: company.company_name,
                has_authorized: company.has_authorized,
                quantity_of_share: company.quantity_of_share
            };
        });