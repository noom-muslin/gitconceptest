function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function getRandomDate(past = true) {
  const start = past ? new Date(2020, 0, 1) : new Date();
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAlphaNumeric(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}


return {
    applications: [
      {
        application_id: getRandomAlphaNumeric(18),
        application_system_type_id: getRandomElement(['Regular', 'Express']),
        application_class_id: getRandomElement(['Normal', 'Premium']),
        application_type_id: getRandomElement(['SCB', 'GCB']),
        application_group_id: getRandomAlphaNumeric(2),
        application_date_time_in: getRandomDate(),
        application_register_type_id: getRandomElement(['FullPack', 'HalfPack']),
        channel_id: getRandomAlphaNumeric(4).toUpperCase(),
        status_id: getRandomElement(['InProgress', 'Completed', 'Pending']),
        created_by: `User${getRandomNumber(1, 100)}`,
        updated_by: `User${getRandomNumber(1, 100)}`,
        approved_date_time: getRandomBoolean() ? getRandomDate() : null,
        tasks: {
          data: [
            {
              task_type_id: getRandomElement(['WebVerify', 'PhoneVerify']),
              indexing_type_id: null,
              work_object: `AL-${getRandomAlphaNumeric(18)}`,
              document_in_datetime: getRandomDate(),
              status_id: getRandomElement(['Todo', 'Done']),
              previous_task_id: null,
              documents: {
                data: {
                  document: {
                    data: {
                      application_id: getRandomAlphaNumeric(18),
                      document_type_id: getRandomElement(['PASSPORT', 'ID_CARD']),
                      document_status_id: getRandomElement(['InformationOnly', 'Verified']),
                      document_number: getRandomAlphaNumeric(18)
                    }
                  }
                }
              },
              party_type: 'BorrowerIndividual',
              appl_party: {
                data: {
                  name_en: `Name${getRandomNumber(1, 100)}`,
                  middle_name_en: `MiddleName${getRandomNumber(1, 100)}`,
                  last_name_en: `LastName${getRandomNumber(1, 100)}`,
                  name: `ชื่อ${getRandomNumber(1, 100)}`,
                  middle_name: `ชื่อกลาง${getRandomNumber(1, 100)}`,
                  last_name: `นามสกุล${getRandomNumber(1, 100)}`,
                  full_name_en: `FullName${getRandomNumber(1, 100)}`,
                  full_name: `ชื่อเต็ม${getRandomNumber(1, 100)}`,
                  application_id: getRandomAlphaNumeric(18),
                  reference_no: `ref-${getRandomNumber(1000, 9999)}-${getRandomNumber(1000, 9999)}`,
                  party_juristic_infos: {
                    data: {
                      application_id: getRandomAlphaNumeric(18),
                      juristic_name: `JuristicName${getRandomNumber(1, 100)}`
                    }
                  },
                  accountlistncbs: {
                    data: {
                      ncb_account_status: getRandomElement(['Unknown', 'Known']),
                      application_id: getRandomAlphaNumeric(18),
                      updated_by: `User${getRandomNumber(1, 100)}`
                    }
                  },
                  borrowers: {
                    data: {
                      application_id: getRandomAlphaNumeric(18),
                      party_type_id: 'BorrowerIndividual',
                      seq: getRandomNumber(1, 5)
                    }
                  },
                  appl_guarantees: {
                    data: {
                      application_id: getRandomAlphaNumeric(18),
                      party_type_id: 'BorrowerIndividual',
                      seq: getRandomNumber(1, 5)
                    }
                  },
                  appl_party_rcverify: {
                    data: {
                      updated_by: `User${getRandomNumber(1, 100)}`,
                      created_by: `User${getRandomNumber(1, 100)}`,
                      appl_party_rcverify_fos: {
                        data: {
                          address_seq: getRandomNumber(1, 10),
                          customer_type: 'Individual',
                          occupation_type: `Occupation${getRandomNumber(1, 100)}`,
                          full_name: `FullName${getRandomNumber(1, 100)}`,
                          reference_no: getRandomAlphaNumeric(18),
                          province: `Province${getRandomNumber(1, 100)}`,
                          amphur: `Amphur${getRandomNumber(1, 100)}`,
                          tambol: `Tambol${getRandomNumber(1, 100)}`,
                          zip_code: `ZIP${getRandomNumber(10000, 99999)}`,
                          business: `Business${getRandomNumber(1, 100)}`,
                          latitude: getRandomNumber(-90, 90).toFixed(2),
                          longitude: getRandomNumber(-180, 180).toFixed(2),
                          address_no: `${getRandomNumber(1, 999)}`,
                          address_usage: getRandomElement(['HomeAddress', 'WorkAddress']),
                          appointment_date: getRandomDate(false),
                          appointment_time: getRandomDate(false),
                          fos_to_remark: `Remark${getRandomNumber(1, 100)}`
                        }
                      }
                    }
                  }
                }
              }
            }
          ]
        },
        accounts: {
          data: {
            product_group_id: getRandomAlphaNumeric(2).toUpperCase(),
            product_type_id: getRandomElement(['New', 'Existing']),
            rccoloan_status: null
          }
        }
      }
    ]
};

