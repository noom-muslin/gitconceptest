window.backofficePlugins = window.backofficePlugins || [];
window.initialThaiPostals = window.initialThaiPostals || [];
window.thaiPostalsDic = window.thaiPostalsDic || [];
window.thaiPostalsCache = window.thaiPostalsCache || [];
window.amphur = window.amphur || undefined;
window.tambon = window.tambon || undefined;
window.zipcode = window.zipcode || undefined;
window.insuranceType = window.insuranceType || undefined;
window.backuplifeInsuranceType = window.backuplifeInsuranceType || undefined;
window.OriginalDocStorageSerialNo = 0;
window.OriginalDocSubSriThaiSerialNo = 0;
window.backofficePlugins.push(function (utils, _) {
  let csentPrevMarketingConsent = undefined;
  let csentPrevCrosssellConsent = undefined;
  let csentPrevModelConsent = undefined;
  let csentAddBorrowerPrevCustomerType = undefined;
  let prevData = undefined;
  let currentChangeDate = "";
  let isNotCurrentData = undefined;
  let initialAgingCount = 0;
  let dealerList = [];
  const workBasketGridName = "workbasket_grid";
  const workListGridName = "worklist_grid";
  const workBasketSearchName = "search";
  const workListSearchName = "work_list_search";
  const searchFU = "search_fu";
  const workbasketGridFU = "workbasket_grid_fu";
  let inputFosMasHoliday = [];
  let errorInputFos = {
    errorTimeHomeAddress: "",
    errorDateHomeAddress: "",
    errorTimeCurrentAddress: "",
    errorDateCurrentAddress: "",
    errorTimeWorkAddress: "",
    errorDateWorkAddress: "",
    errorTimeSecoundAddress: "",
    errorDateSecoundAddress: "",
  };
  return {
    converters: {
      add_borrower_secondary_occupation,
      delete_borrower_secondary_occupation,
      dateToAge: dateToAge,
      dateAgeToColor: dateAgeToColor,
      checkTime,
      checkDate,
      checkCanSubmitInputFos,
      checkTimeCurrentAddress,
      checkDateCurrentAddress,
      checkDateHomeAddress,
      checkTimeHomeAddress,
      checkTimeWorkAddress,
      checkDateWorkAddress,
      checkTimeSecoundAddress,
      checkDateSecoundAddress,
      mapDateHoliday,
      logContext: logContext,
      sla_converter: sla_converter,
      document_visibility: document_visibility,
      toggle_document_visibility: toggle_document_visibility,
      toggle_section_visibility,
      section_visibility,
      date_column_converter: date_column_converter,
      csentBorrowerIsActive: csentBorrowerIsActive,
      workbasket_filter_clear: workbasket_filter_clear,
      work_basket_filter,
      work_list_filter,
      mfprofile_worklist_filter,
      mfprofile_workbasket_filter,
      followup_workbasket_filter,
      followup_Type,
      followup_updated,
      addBorrowerDoc,
      addBorrowerInfo,
      addBorrowerRcReshape,
      isActiveCell,
      check_position_management_search_criteria,
      check_groups_and_positions_search_criteria,
      clear_position_management_search_criteria,
      check_search_criteria: check_search_criteria,
      check_qc_user_task_type_id: check_qc_user_task_type_id,
      check_worklist_search_criteria,
      check_workbasket_search_criteria,
      tempIndexing_canSubmit: tempIndexing_canSubmit,
      tempIndexing_cancel: tempIndexing_cancel,
      indexingTC_selectedApproved: indexingTC_selectedApproved,
      indexingTC_selectedIndex: indexingTC_selectedIndex,
      indexingTC_selectedAll: indexingTC_selectedAll,
      indexingTC_isMortgageCheck: indexingTC_isMortgageCheck,
      indexingcc_checking_search_fields: indexingcc_checking_search_fields,
      workbasket_get_top_task: workbasket_get_top_task,
      clear_filter_worklist,
      clear_filter_workbasket,
      go_home_from_success: go_home_from_success,
      indexingtc_checking_search_fields: indexingtc_checking_search_fields,
      autocompleteDataConverter: autocompleteDataConverter,
      autocompleteBaseConverter: autocompleteBaseConverter,
      inputToQueryVariables: inputToQueryVariables,
      inputToAutoCompleteQueryVariables,
      date_to_days_and_hours_passed: date_to_days_and_hours_passed,
      mapValueLabel,
      mapIdLabel,
      mapAndConvertValueLabel,
      addClassForCSENTStatus: addClassForCSENTStatus,
      csent_marketing_consent_version_dropdown_cleaner,
      csent_crosssell_consent_version_dropdown_cleaner,
      csent_model_consent_version_dropdown_cleaner,
      csent_on_customer_type_borrower_change,
      csent_checking_search_fields,
      csent_checking_save_fields,
      product_group_selector,
      register_special_conditions_checkbox,
      search_object_processor,
      autoCompleteOcCodeEnumConverter,
      autoCompleteStandartCodeEnumConverter,
      map_ncb_history,
      map_fu_history,
      getSalesPersonInfo,
      getRecommendedPersonForEdit,
      deleteBorrowerData,
      repeatNcbCheck_visibility,
      sendForInspectionYourself_visibility,
      openDocumentumLink: openDocumentumLink,
      positionManagement_checking_editPosition_fields,
      register_populate_AddLoan,
      register_add_payment_specific_plan,
      register_add_accessories,
      register_add_invoice,
      register_add_payment_receiving_account,
      register_add_life_insurances,
      register_contract_no_not_readonly,
      register_save_loan,
      register_DeleteLoan,
      registerAddBorrowerPopulateAddAddress,
      registerAddBorrowerAddAddress,
      isSalesPersonInfoFound,
      isRepeatNcbCheckSelected,
      thaiPostalEnumsForAddresses,
      cacheThaiPostalsDic,
      checkIsAddressesEmpty,
      filterProvince: filterProvince,
      filterAmphur: filterAmphur,
      filterTambon: filterTambon,
      filterZipcode: filterZipcode,
      initialAmphur: initialAmphur,
      initialTambon: initialTambon,
      initialZipcode: initialZipcode,
      isCurrentSameRegistrationCheckBox: isCurrentSameRegistrationCheckBox,
      mapCodeLabel,
      mapFullNameValue,
      mapStaffNameValue,
      mapInsuranceType,
      insuranceTypeListener,
      check_null: check_null,
      staff_name: staff_name,
      sales_buddy_canSubmit: sales_buddy_canSubmit,
      go_to_sales_buddy_homepage,
      replaceTitleCarSection,
      navigate_sales_buddy,
      redbook_filter,
      mapValueLabelOneParameter,
      modal_redbook_sent_in,
      selected_redbook_vehicle,
      consoleLog,
      registerDateTextConverter,
      thousandSeparator,
      clearChangeEngineReasonKey,
      selectOpinion,
      clear_work_basket_search,
      clear_work_list_search,
      check_work_list_search_criteria,
      check_work_basket_search_criteria,
      getSalesPersonForEdit,
      isNoData,
      reset_grid,
      clearAirBag,
      upPriceChecking,
      qcOpinionKeyInListener,
      stationListener,
      externalLinkListener,
      registerBorrowerAgeListener,
      getQcOpinion,
      getTmOpinion,
      getAmOpinion,
      getHsOpinion,
      setQcBackModalPage,
      setQcCancelModalPage,
      setQcSaveToDraftModalPage,
      setQcSendBackModalPage,
      clearNotification,
      vehicle_filter,
      selected_register_vehicle,
      setInitValue,
      dealerSelectList,
      calculationPrincipal,
      calculationNormalInstallment,
      vehicleNoFunction,
      productGroupIndex,
      productTypeIndex,
      checkListDetailsAddProduct,
      checkListDetailsGetProduct,
      checkListDetailsDeleteProduct,
      show_bbi_section,
      addItemInterestDetailInTable,
      removeItemInterestDetailInTable,
      add_repay,
      search_repay,
      deletePlan,
      editPlan,
      tempAccountFee,
      navigate_previous_page,
      selectSubLimit,
      deleteSubLimit,
      selectSubLimitAdditionalService,
      editSubLimit,
      staffProfileList,
      add_amount_tier,
      register_add_sublimit_update_plan,
      add_interest_rate_plan,
      trigger_edit_or_delete_plan,
      findAndRemove,
      deleteInterestRatePlan,
      getPlanId,
      goToSubLimitDetail,
      deleteAmountTier,
      navigate_register,
      clearPlan,
      clearAddtionalService,
      goBack,
      clearSessionInterestPlan,
      latestRequestsRowComponentType,
      editLoan,
      editSublimit,
      deleteLoan,
      addLGInfo,
      removeLGinfo,
      listener_mortgage_page_appl_account,
      listener_edit_od_interest_plan,
      filterFOSInterfaceStatus: filterFOSInterfaceStatus,
      filterFOSStatus: filterFOSStatus,
      go_to_fos_homepage: go_to_fos_homepage,
      toggleSendToFosStatus: toggleSendToFosStatus,
      validateReferenceDocumentNo,
      getIncorrectDocumentNoError,
      clear_work_basket_search_fu,
      work_basket_filter_fu,
      check_work_basket_search_criteria_fu,
      checkForValidationErrorEditBorrowerOrder,
      getValidationResponseEditBorrowerOrder,
      passBorrowersToEditOrder,
      passPayloadNoTransform,
      returnOrderedBorrowers,
      resetRelationshipEditBorrowerOrder,
      validateCurrentData,
      selectEffectiveDate,
      validateAgingStatus,
      convertNumber,
      mapAgingPayload,
      initialAging,
      check_popup_visibility,
      isReferenceDocumentNoDisabled,
      intervalFromDateInYears,
      //function for RcVerify and WebVerify
      visible_addShareHolders_template: visible_addShareHolders_template,
      disable_addShareHolders_template: disable_addShareHolders_template,
      add_authorizePerson: add_authorizePerson,
      add_newShareholderToList: add_newShareholderToList,
      toggleShowNewShareholder: toggleShowNewShareholder,
      saveNewShareholder: saveNewShareholder,
      nhsoListCheck: nhsoListCheck,
      go_to_webverify_homepage:go_to_webverify_homepage,
      go_to_webverify_listpage:go_to_webverify_listpage,
      go_to_rcverify_homepage:go_to_rcverify_homepage,
      // From Original Doc Station
      customer_name_multi_converter,
      account_number_converter,
      product_type_converter,
      sub_product_converter,
      license_plate_converter,
      province_converter,
      account_settlement_date_converter,
      unit_converter,
      addChecklistDocumnet,
      refresh_data_grid,
      guarantee_number_converter,
      originaldoc_storage_serial_no_generator,
      originaldoc_subsrithai_serial_no_generator,
      resetSerialNo,
      sale_name_converter,
      ////Customer Information & Insurance Station
      reset_notification: reset_notification,
      ci_workbasket_filter: ci_workbasket_filter,
      ci_worklist_filter: ci_worklist_filter,
      objectives_converter_ci_insurance: objectives_converter_ci_insurance,
      customer_name_converter_ci_insurance: customer_name_converter_ci_insurance,
      clear_filter_applications_grid_ci_insurance:
      clear_filter_applications_grid_ci_insurance,
      insurance_worklist_filter: insurance_worklist_filter,
      insurance_workbasket_filter: insurance_workbasket_filter,
      apprisal_date_converter: apprisal_date_converter,
      security_type_converter: security_type_converter,
      date_only_column_converter: date_only_column_converter,
      ////End Customer Information & Insurance Station
      toggle_submit_visibility: toggle_submit_visibility,
      check_search_criteria_WL: check_search_criteria_WL,
      check_search_criteria_WB: check_search_criteria_WB,
      openDocumentumLinkfromGrid: openDocumentumLinkfromGrid,
      qc_work_basket_search_criteria,
      qc_workbasket_filter,
      qc_autocompleteDataConverter: qc_autocompleteDataConverter,
      mappingQCDealer,
      //function for Field Verify
      filterFOSInterfaceStatus: filterFOSInterfaceStatus,
      filterFOSStatus: filterFOSStatus,
      go_to_fos_homepage: go_to_fos_homepage,
      toggleSendToFosStatus: toggleSendToFosStatus,
      amphurQuery: amphurQuery,
      tambonQuery: tambonQuery,
      zipcodeQuery: zipcodeQuery,
      selectLoan,
      editSublimit,
      show_bbi_section,
      showEditSubLimit,
      stationListenerRegister,
      editLoan,
      show_register_have_success,
      mappingDealerCode,
      mappingLoadDetail,
      concatQcDoorNum,
      qcConvertNumber0Digit,
      qcConvertNumber2Digit,
      qcRedbookListener,
      positionManagement_checking_savePosition_fields,
      inputFOSListenerStorage,
      setInputFosSaveModalPage,
      groupsAndPositions_checking_save_fields,
      validate_phone_number,
      getCurrentThaiDate,
      filterVehicleKey,
      qcRedbookSearchForm,
      qc_redbook_search_criteria,
      dealerCodeSelection,
      clearOldLoanSearch,
      showOldLoanModal,
      moveSelectedToUnselectCheckbox,
      moveUnselectedToSelectCheckbox,
      moveAllToSelectedCheckbox,
      moveAllToUnselectedCheckbox,
      vehicleStateInfoText
    },
  };

  function vehicleStateInfoText(data){
    const isEngineNoMatchedWording = data.isEngineNoMatched == "true" ? "ตรง" : "ไม่ตรง"
    const isEngineNoMatchedText = data.isEngineNoMatched != null ? isEngineNoMatchedWording : null;
    const isChassisNoMatchedWording = data.isChassisNoMatched == "true" ? "ตรง" : "ไม่ตรง"
    const isChassisNoMatchedText = data.isChassisNoMatched != null ? isChassisNoMatchedWording : null;
    const breakSystemWording = data.breakSystem == "ABS" ? "ABS" : "ปกติ"
    const breakSystemText =  data.breakSystem != null ? breakSystemWording : null;
    const hasAirBagWording = data.hasAirBag == "true" ? "มี" : "ไม่มี"
    const hasAirBagText = data.hasAirBag != null ? hasAirBagWording : null;
    const hasNavigatorWording = data.hasNavigatorWording == "true" ? "มี" : "ไม่มี";
    const hasNavigatorText = data.hasNavigatorWording != null ? hasNavigatorWording : null;

    return {
      ...data,
      isEngineNoMatchedText,
      isChassisNoMatchedText,
      hasNavigatorText,
      breakSystemText,
      hasAirBagText
    }

  }

  function filterVehicleKey(redbook_brand, redbook_model, sub_model_code) {
    if (!redbook_brand || !redbook_model || !sub_model_code) return null;
    return redbook_brand+"/"+redbook_model+"/"+sub_model_code;
  }

  function mappingQCDealer(data) {
    if (!data) return;
    dealerList = data ? data : dealerList;

    return data.map((obj) => ({
      value: obj.value,
      label: obj.label,
    }));
  }

  function dealerCodeSelection(dealerCode, dealerInfo) {
    if (dealerList.length == 0) {
      if(dealerInfo){
        return {
          dealerCode: dealerInfo.dealerCode,
          dealerName: dealerInfo.dealerName,
          dealerGroup: dealerInfo.dealerGroup,
          dealerType: dealerInfo.dealerType,
          dealerGrade: dealerInfo.dealerGrade,
          dealerSize: dealerInfo.dealerSize,
        }
      }else{
        return;
      }
    }
    if (dealerCode) {
      let dealer = dealerList.find((item) => item.value === dealerCode);
      return {
        dealerCode: dealer.value,
        dealerName: dealer.dealerName,
        dealerGroup: dealer.dealerGroup,
        dealerType: dealer.dealerType,
        dealerGrade: dealer.dealerGrade,
        dealerSize: dealer.dealerSize,
      };
    } else {
      return {
        dealerCode: null,
        dealerName: null,
        dealerGroup: null,
        dealerType: null,
        dealerGrade: null,
        dealerSize: null
      };
    }
  }
  
  function getCurrentThaiDate(){
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = String(Number(today.getFullYear()) + 543);

    const currentThaiDate = yyyy + "-" + mm + "-" + dd;

    return currentThaiDate;
  }

  function qcRedbookListener(data) {
    let isPremium = false;
    if (data !=null && data != undefined) {
      if (data.brandLevel && data.brandLevel === "Premium") {
        isPremium = true;
      } else if (data.modelLevel && data.modelLevel === "Premium") {
        isPremium = true;
      }
      return {
        ...data,
        cckwhShow: qcConvertNumber0Digit(data.cckwh),
        noOfDoorShow: concatQcDoorNum(data.noOfDoor),
        redbookPriceShow: qcConvertNumber2Digit(data.redbookPrice),
        premiumBrandFlag: ""+isPremium
      };
    }
  }

  function concatQcDoorNum(data) {
    if (data != null || undefined != data) {
      return data + " Dr";
    } else{
      return null;
    }
  }

  function qcConvertNumber0Digit(data) {
    if (data != null || undefined != data) {
      return parseFloat(data).toLocaleString(undefined, {
        minimumFractionDigits: 0,
      });
    } else {
      return null;
    }
}

  function qcConvertNumber2Digit(data) {
    if (data != null || undefined != data) {
      return (
        parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 2,
        }) + " บาท"
      );
    }
    return null;
  }

  function add_borrower_secondary_occupation(ctx) {
    const data = ctx.data;
    const secondaryOccupations = !Boolean(data.secondaryOccupations)
      ? []
      : [...data.secondaryOccupations];
    const maxIndex = secondaryOccupations.reduce(
      (res, i) => (res > i.index ? res : i.index),
      0
    );
    secondaryOccupations.push({
      index: !isNaN(maxIndex) ? maxIndex + 1 : 1,
    });
    return {
      payload: {
        data: {
          secondaryOccupations,
        },
      },
    };
  }

  function delete_borrower_secondary_occupation(ctx) {
    const element = ctx.additionalData;
    const data = ctx.data;
    let secondaryOccupations = !Boolean(data.secondaryOccupations)
      ? []
      : [...data.secondaryOccupations];
    if(Boolean(element) && secondaryOccupations.length > 0) {
      secondaryOccupations = secondaryOccupations.filter(i => i.index != element.index); 
    }

    return {
      payload: {
        data: {
          secondaryOccupations,
        },
      },
    };
  }

  function uuidv4() {
    return "10000000-1000-1000-1000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  }

  function latestRequestsRowComponentType(data) {
    return data ? "button" : "buttonDisable";
  }

  function toggleShowNewShareholder(ctx) {
    // Function to toggle the visibility of the new shareholder form
    ctx.updateData({ showNewShareholder: !ctx.data.showNewShareholder });
  }
  function saveNewShareholder(ctx) {
    // Function to save the new shareholder and hide the form
    const newShareholder = ctx.data.newShareholder;

    let shareholders = ctx.data.shareholders || [];
    shareholders.push(newShareholder);
    ctx.updateData({
      shareholders,
      showNewShareholder: false,
      newShareholder: {},
    });
  }

  function qc_work_basket_search_criteria(ctx) {
    let searchData = ctx.data.search || {};
    return {
      payload: {
        data: {
          canSubmit: !!Object.keys(searchData).filter((i) => searchData[i])
            .length,
        },
      },
    };
  }

  function isNotEmpty(data) {
    return null !== data && undefined !== data && "" !== data
  }

  function qc_redbook_search_criteria(ctx) {
    let searchData = ctx.data.search || {};
    let validSubmit = isNotEmpty(searchData.redbook_brand) && isNotEmpty(searchData.redbook_model);
    return {
      payload: {
        data: {
          canSubmit: ""+validSubmit
        },
      },
    };
  }

  function qc_workbasket_filter(ctx) {
    // const docInDateTimeRange = getDateFromDateTo(search.doc_in_datetime);
    if (!ctx.data.search) {
      return {
        payload: {
          data: {
            [workBasketGridName]: { filters: [], pagination: { pageIndex: 0 } },
          },
        },
      };
    }
    const search = ctx.data.search;
    const filters = [
      get_filter(
        search.application_number,
        "and",
        "application.application_id",
        "contains"
      ),
      get_filter(
        search.application_group,
        "and",
        "application.application_group.code",
        "eq"
      ),
      get_filter(
        search.application_type,
        "and",
        "application.application_type.code",
        "eq"
      ),
      get_filter(
        search.product_type,
        "and",
        "application.primary_account.account.product_type.code",
        "eq"
      ),
      get_filter(
        search.sub_product_type,
        "and",
        "application.primary_account.account.sub_product.code",
        "eq"
      ),
      get_filter(
        search.customer_name,
        "and",
        "application.primary_borrower.borrower.party.full_name",
        "contains"
      ),
      get_filter(
        search.customer_lastname,
        "and",
        "application.primary_borrower.borrower.party.full_name",
        "contains"
      ),
    ].filter(Boolean);

    if (search.doc_in_datetime) {
      filters.push(
        get_filter(
          search.doc_in_datetime.from + "T00:00:00.000",
          "and",
          "application.application_date_time_in",
          "gte"
        )
      );
      filters.push(
        get_filter(
          search.doc_in_datetime.to + "T23:59:59.999",
          "and",
          "application.application_date_time_in",
          "lte"
        )
      );
    }

    return {
      payload: {
        data: {
          [workBasketGridName]: { filters, pagination: { pageIndex: 0 } },
        },
      },
    };
  }

  function sale_name_converter(data) {
    if (data && data.length > 0) {
      return data[0].title + data[0].name + " " + data[0].surname;
    }
  }

  function nhsoListCheck(data, ctx) {
    console.log("test_checkvalue", data, "context", ctx);

    let check_array =
      ctx.nhso_checkboxes && Array.isArray(ctx.nhso_checkboxes)
        ? ctx.nhso_checkboxes
        : [];

    console.log("check_array", check_array);

    if (Array.isArray(data)) {
      check_array = check_array.filter((item) =>
        data.some((d) => d.displayValue === item && d.checkvalue)
      );
      data.forEach((d) => {
        if (d.checkvalue && !check_array.includes(d.displayValue)) {
          check_array.push(d.displayValue);
        }
      });
    }

    return check_array;
  }

  function visible_addShareHolders_template() {
    return {
      payload: {
        data: {
          is_addShareHolders: true,
        },
      },
    };
  }

  function disable_addShareHolders_template(context) {
    return {
      payload: {
        data: {
          is_addShareHolders: false,
        },
      },
    };
  }

  function add_newShareholderToList(context) {
    console.log("Add newShareholderToList>>>>>>>>>");

    const new_shareHolder = {
      ...context.data.enlite_individal.add_shareHolders,
    };

    let all_shareHolder = [
      ...(context.data.enlite_individal.shareHolders || []),
    ];

    console.log(new_shareHolder);
    console.log(all_shareHolder);

    all_shareHolder.push(new_shareHolder);

    all_shareHolder.forEach((shareholder, index) => {
      shareholder.index = index + 1;
    });

    console.log(all_shareHolder);
    context.data.enlite_individal.shareHolders = all_shareHolder;
  }

  function add_authorizePerson(context) {
    let authorizePerson = [
      ...(context.data.juristicenlite?.authorizePerson || []),
    ];
    console.log("Before adding new person:", authorizePerson);
    let TempauthorizePerson = {};

    authorizePerson.push(TempauthorizePerson);

    let updatedAuthorizePerson = authorizePerson.map((person, index) => {
      return { ...person, index: index + 1 };
    });

    console.log("After adding new person:", updatedAuthorizePerson);
    return {
      payload: {
        data: {
          juristicenlite: {
            ...context.data.juristicenlite,
            authorizePerson: updatedAuthorizePerson,
          },
        },
      },
    };
  }

  function toggleShowNewShareholder(ctx) {
    const newShowState = !ctx.data.showNewShareholder;

    return {
      payload: {
        data: {
          showNewShareholder: newShowState,
        },
      },
    };
  }

  function saveNewShareholder(ctx) {
    const newShareholder = ctx.data.newShareholder;
    let shareholders = [...(ctx.data.shareholders || [])];

    shareholders.push(newShareholder);

    return {
      payload: {
        data: {
          shareholders: shareholders,
          showNewShareholder: false,
          newShareholder: {}, // Reset the newShareholder form
        },
      },
    };
  }

  function setLocalStorage(modalType) {
    localStorage.setItem(
      "showNotification",
      JSON.stringify({ data: modalType, expired: new Date() })
    );
  }

  function getLocalStorage(expiredSecond=3000) {
    if (localStorage.getItem("showNotification")) {
      let dataItem = JSON.parse(localStorage.getItem("showNotification"));
      let diffTime = new Date() - new Date(dataItem.expired);
      if (diffTime > expiredSecond) {
        localStorage.setItem("showNotification", "{}");
      } else {
        let dataItem = JSON.parse(localStorage.getItem("showNotification"));
        if (Object.keys(dataItem).length > 0) {
          // show notification
          console.log(
            JSON.parse(localStorage.getItem("showNotification")).data
          );
          let result = JSON.parse(
            localStorage.getItem("showNotification")
          ).data;
          localStorage.setItem("showNotification", "{}");
          return result;
        }
      }
    } else {
      return "";
    }
  }

  function getLocalStorageRegister() {
    if (localStorage.getItem("showNotification")) {
      let dataItem = JSON.parse(localStorage.getItem("showNotification"));
      let diffTime = new Date() - new Date(dataItem.expired);
      if (diffTime > 3000) {
        localStorage.setItem("showNotification", "{}");
      } else {
        let dataItem = JSON.parse(localStorage.getItem("showNotification"));
        if (Object.keys(dataItem).length > 0) {
          // show notification
          console.log(
            JSON.parse(localStorage.getItem("showNotification")).data
          );
          let result = JSON.parse(
            localStorage.getItem("showNotification")
          ).data;
          localStorage.setItem("showNotification", "{}");
          return result;
        }
      }
    } else {
      return "";
    }
  }

  function setQcBackModalPage() {
    setLocalStorage("QC_Details_Back");
  }

  function setQcSendBackModalPage() {
    setLocalStorage("QC_Details_SendBack");
  }

  function setQcCancelModalPage() {
    setLocalStorage("QC_Details_Cancel");
  }

  function setQcSaveToDraftModalPage() {
    setLocalStorage("m_QC_Details_SaveToDraft");
  }

  function externalLinkListener(data) {
    if (!data) return;

    for (const item of data) {
      const urlNamePath = "//p[text()='" + item.name + "']";
      var matchingElement = document.evaluate(
        urlNamePath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (!matchingElement) continue;
      const parentNodeTageType = matchingElement.parentNode.nodeName;
      if (parentNodeTageType === "A") continue;

      var temp_link = document.createElement("A");
      temp_link.href = "javascript:void(0);";
      temp_link.onclick = function () {
        window.open(item.url, '_blank').focus();
      };
      var linkText = document.createTextNode(item.name);
      temp_link.appendChild(linkText);
      matchingElement.replaceWith(temp_link);
    }

    return data;
  }

  function getQcOpinion(ctx) {
    return {
      payload: {
        data: {
          qcOpinionData: ctx.data.qcOpinion.qc,
          showComment: false,
        },
      },
    };
  }
  function getTmOpinion(ctx) {
    return {
      payload: {
        data: {
          qcOpinionData: ctx.data.qcOpinion.tm,
          showComment: false,
        },
      },
    };
  }
  function getAmOpinion(ctx) {
    return {
      payload: {
        data: {
          qcOpinionData: ctx.data.qcOpinion.am,
          showComment: false,
        },
      },
    };
  }
  function getHsOpinion(ctx) {
    return {
      payload: {
        data: {
          qcOpinionData: ctx.data.qcOpinion.hs,
          showComment: false,
        },
      },
    };
  }

  function clearNotification() {
    localStorage.setItem("showNotification", "{}");
  }

  function stationListener(data) {
    if (!data) return;
    const roleUndefined = Object.keys(data).length <= 0;
    if (roleUndefined) return { roleUndefined };

    return {
      ...data.station,
      roleUndefined,
      showNotification: getLocalStorage(10000),
    };
  }

  function qcOpinionKeyInListener(data) {
    if (!data) return;
    if (Object.keys(data).length <= 0) return;
    if (!data.applicationDetail) return data;

    const productType = data.applicationDetail.productType;
    const sellingPrice = data.qcOpinionKeyIn.sellingPrice;
    const principal = data.qcOpinionKeyIn.principal;
    const redbookPrice = data.redbookInfo.redbookPrice;

    const isSellingPrincipalNotNull = principal != null && sellingPrice != null
    const isUsed = productType === "Used";
    const isMCMC = productType === "MCMC";
    const UsedProductOverPrice =
      (sellingPrice / parseFloat(redbookPrice)) * 100 > 120;
    const ProductMCMCOverPrice = sellingPrice > parseFloat(redbookPrice);
    const upPricePercentCalculate = (
      ((sellingPrice - redbookPrice) / redbookPrice) *
      100
    ).toFixed(2);

    const usedErrorMessage = isUsed && UsedProductOverPrice && isSellingPrincipalNotNull
    const MCMCErrorMessage = isMCMC && ProductMCMCOverPrice && isSellingPrincipalNotNull
    const principalErrorMessage = isSellingPrincipalNotNull && (principal > sellingPrice)
    const isUpPriceText = sellingPrice >= principal  ?  "Up Price" : "ไม่ Up Price";
    const isUpPrice = isSellingPrincipalNotNull ? isUpPriceText : null;
    const downPercent = isUsed
      ? ((sellingPrice - principal) / sellingPrice) * 100
      : data.qcOpinionKeyIn.downPercent;
    const ltvPercent = isMCMC
      ? (principal / sellingPrice) * 100
      : data.qcOpinionKeyIn.ltvPercent;
    const upPricePercent =
      sellingPrice > principal ? Number(upPricePercentCalculate) : 0.00;

    const isDownPercentError = isUsed && downPercent <= 0;
    const isltvPercentError = isMCMC && ltvPercent <= 0;

    const percentErrorMessage = isSellingPrincipalNotNull && (isDownPercentError || isltvPercentError);

    return {
      ...data.qcOpinionKeyIn,
      usedErrorMessage,
      MCMCErrorMessage,
      principalErrorMessage,
      isUpPrice,
      ltvPercent,
      downPercent,
      percentErrorMessage,
      upPricePercent,
    };
  }

  function upPriceChecking(data) {
    if (!data) return;
    if (!data.vehiclePriceInfo) return;

    function numToTwoDecimals(number) {
      const decimals = (Math.round(number * 100) / 100).toFixed(2);
      return Number(decimals);
    }

    function numberWithCommas(number) {
      const decimal = numToTwoDecimals(number);
      const fixedTwoDigits = decimal.toLocaleString("en", { minimumFractionDigits: 2 })
      return fixedTwoDigits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const vehiclePriceInfo = data.vehiclePriceInfo;
    const redbookInfo = data.redbookInfo;
    const sellingPrice = vehiclePriceInfo.sellingPrice;
    const principalPrice = vehiclePriceInfo.principalPrice;

    const calculatedLtv = (principalPrice / sellingPrice) * 100;
    const ltvPercent = calculatedLtv > 0 ? numToTwoDecimals(calculatedLtv) : 0;

    const calculatedDown =
      ((sellingPrice - principalPrice) / sellingPrice) * 100;
    const downPercent =
      calculatedDown > 0 ? numToTwoDecimals(calculatedDown) : 0;

    const isSellingPrincipalNotNull = sellingPrice != null && principalPrice != null

    const checkUpPrice = sellingPrice > principalPrice;
    const checkUpPriceText = checkUpPrice ? "Up Price" : "ไม่ Up Price";
    const isUpPrice = isSellingPrincipalNotNull ? checkUpPriceText : null;
    const redbookPrice = Number(redbookInfo.redbookPrice);
    const calculatedUpPercent =
      ((sellingPrice - redbookPrice) / redbookPrice) * 100;
    const upPricePercent =
      calculatedUpPercent > 0 && checkUpPrice
        ? numToTwoDecimals(calculatedUpPercent)
        : 0;

    const displayDownPercent = isSellingPrincipalNotNull ? numberWithCommas(downPercent) + " %" : null;
    const displayltvPercent = isSellingPrincipalNotNull ? numberWithCommas(ltvPercent) + " %" : null;
    const displayPrincipalPrice = principalPrice !== null ? numberWithCommas(principalPrice) + " บาท" : null;
    const displaySellingPrice = sellingPrice !== null ? numberWithCommas(sellingPrice) + " บาท" : null;
    const displayUpPricePercent = isSellingPrincipalNotNull ? numberWithCommas(upPricePercent) + " %" : null;

    const result = {
      ...vehiclePriceInfo,
      upPricePercent,
      isUpPrice,
      downPercent,
      ltvPercent,
      displayDownPercent,
      displayltvPercent,
      displayPrincipalPrice,
      displaySellingPrice,
      displayUpPricePercent,
    };

    return result;
  }
  function clearAirBag(data) {
    if (!data) return;
    if (data.hasAirBag !== "false") return data;

    const noOfAirBags = null;
    const result = {
      ...data,
      noOfAirBags,
    };

    return result;
  }

  function selectOpinion(ctx) {
    const mData = ctx.additionalData;
    return {
      payload: {
        data: {
          showComment: true,
          dataComment: {
            ...mData,
            ltvPercent: mData.ltvPercent || undefined,
            ltvPercent: mData.ltvPercent || undefined,
          },
        },
      },
    };
  }

  function clearChangeEngineReasonKey(data) {
    if (!data) return;
    if (data.changeEngineFlag !== "false") return data;

    const result = {
      ...data,
      changeEngineReasonKey: "",
    };

    return result;
  }

  function thousandSeparator(data) {
    if (!data) return;

    function numberWithCommas(number) {
      if(!number) {
        number = "0";
      }
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const mileageNumberText = numberWithCommas(data.mileageNumber);

    const result = {
      ...data,
      mileageNumberText,
    };

    return result;
  }

  function registerDateTextConverter(data) {
    if (!data) return;
    const registerDate = data.registerFlag ? data.registerDate : null;

    const result = {
      ...data,
      registerDate,
    };

    return result;
  }

  function consoleLog(data) {
    console.log("Test Console Log From Select Row:", data);
  }

  function isObject(data) {
    return typeof data === 'object' && data !== null
  }

  function qcRedbookSearchForm(dataSearch, redbookInfo) {
    if (undefined == dataSearch || null == dataSearch) {
      if (undefined == redbookInfo || null == redbookInfo) {
        return {
          redbook_brand: ""
        }
      } else {
        dataSearch = {}
        dataSearch.redbook_brand = ""+redbookInfo.redbook_brand
        dataSearch.redbook_model = ""+redbookInfo.redbook_model
        dataSearch.sub_model_year = isObject(redbookInfo.sub_model_year)?undefined:redbookInfo.sub_model_year
        dataSearch.cckwh = isObject(redbookInfo.cckwh)?undefined:redbookInfo.cckwh
        dataSearch.gear_type = isObject(redbookInfo.gear_type)?undefined:redbookInfo.gear_type
        dataSearch.redbook_sub_model = ""+redbookInfo.redbook_sub_model
      }
    }
    const disabledRedbookModel = !dataSearch.redbook_brand;
    const disabledSubModelYear = !dataSearch.redbook_model;
    const disabledCCKWH = !dataSearch.sub_model_year;
    const disabledGearType = !dataSearch.cckwh;
    const disabledRedbookSubModel = !dataSearch.gear_type;
    return {
      ...dataSearch,
      disabledRedbookModel,
      disabledSubModelYear,
      disabledCCKWH,
      disabledGearType,
      disabledRedbookSubModel
    }
  }

  function register_special_conditions_checkbox(data) {
    if (!prevData) {
      prevData = data;
      return data;
    }

    const newData = { ...data };

    if (
      newData.special_conditions_skipNCB &&
      newData.special_conditions_notAllRCVerify
    ) {
      if (
        prevData.special_conditions_skipNCB &&
        !prevData.special_conditions_notAllRCVerify
      ) {
        newData.special_conditions_skipNCB = false;
      } else if (
        !prevData.special_conditions_skipNCB &&
        prevData.special_conditions_notAllRCVerify
      ) {
        newData.special_conditions_notAllRCVerify = false;
      }
    }
    prevData = newData;
    return newData;
  }

  function product_group_selector(data) {
    return data?.product_group_enum?.filter(
      (x) => x.product_category_id === data?.search?.application_group
    );
  }

  function search_object_processor(data) {
    const product_group_filtered = product_group_selector(data);

    const newSearch = JSON.parse(JSON.stringify(data?.search || {}));
    switch (product_group_filtered?.length) {
      case 0:
        newSearch.product_group = undefined;
        break;
      case 1:
        newSearch.product_group = product_group_filtered[0]?.value;
        break;
    }

    return newSearch;
  }

  function csent_marketing_consent_version_dropdown_cleaner(data, _row_item) {
    if (csentPrevMarketingConsent === undefined) {
      csentPrevMarketingConsent = data;
      return data; // no transform
    }

    const result =
      data?.status !== csentPrevMarketingConsent.status
        ? {
            ...(data ?? {}),
            version: undefined,
          }
        : data;

    csentPrevMarketingConsent = data;

    return result;
  }

  function csent_crosssell_consent_version_dropdown_cleaner(data, _row_item) {
    if (csentPrevCrosssellConsent === undefined) {
      csentPrevCrosssellConsent = data;
      return data; // no transform
    }

    const result =
      data?.status !== csentPrevCrosssellConsent.status
        ? {
            ...(data ?? {}),
            version: undefined,
          }
        : data;

    csentPrevCrosssellConsent = data;

    return result;
  }

  function csent_model_consent_version_dropdown_cleaner(data, _row_item) {
    if (csentPrevModelConsent === undefined) {
      csentPrevModelConsent = data;
      return data; // no transform
    }

    const result =
      data?.status !== csentPrevModelConsent.status
        ? {
            ...(data ?? {}),
            version: undefined,
          }
        : data;

    csentPrevModelConsent = data;

    return result;
  }

  function csent_on_customer_type_borrower_change(data, formData) {
    if (data.customerType === csentAddBorrowerPrevCustomerType) {
      return data;
    }

    csentAddBorrowerPrevCustomerType = data.customerType;

    return {
      isSearchResultShown: false,
      customerType: data.customerType,
      referenceTypes:
        data.customerType === "Individual"
          ? formData.individualReferenceTypes
          : formData.juristicReferenceTypes
    }
  }

  function csent_checking_search_fields(context) {
    const { refDocumentType, refDocumentNo } = context?.data?.borrower;
    const status = refDocumentType && refDocumentNo ? "form_valid" : "form_invalid";

    return {
      payload: {
        data: {
          status: status,
        },
      },
    };
  }

  function csent_checking_save_fields(context) {
    const {
      document_type: docType,
      document_number: docNum,
      title,
      name,
      last_name,
      legal_entity_name: leName,
      person_type: pType,
    } = context?.data?.customer_info;

    let status = "form_invalid";

    if (pType === "individual") {
      if (docType && docNum && title && name && last_name) {
        status = "form_valid";
      }
    }

    if (pType === "legalentity") {
      if (docType && docNum && refNo && leName) {
        status = "form_valid";
      }
    }

    return {
      payload: {
        data: {
          status: status,
        },
      },
    };
  }

  function selected_redbook_vehicle(ctx) {
    let isPremium = false;
    if (ctx.additionalData !=null && ctx.additionalData != undefined) {
      if (ctx.additionalData.brandLevel && ctx.additionalData.brandLevel === "Premium") {
        isPremium = true
      } else if(ctx.additionalData.modelLevel && ctx.additionalData.modelLevel === "Premium") {
        isPremium = true
      }
    }
    return {
      payload: {
        data: {
          canSubmit: "false",
          redbookInfo: {
            ...ctx.additionalData,
            cckwhShow: qcConvertNumber0Digit(ctx.additionalData.cckwh),
            noOfDoorShow: concatQcDoorNum(ctx.additionalData.noOfDoor),
            redbookPriceShow: qcConvertNumber2Digit(
              ctx.additionalData.redbookPrice
            ),
            vehicleKey: filterVehicleKey(
              ctx.additionalData.redbookBrand,
              ctx.additionalData.redbookModel,
              ctx.additionalData.subModelCode
            ),
            premiumBrandFlag: ""+isPremium
          },
        },
      },
    };
  }

  function selected_register_vehicle(ctx) {
    let selectedIndex = ctx.data.selectIndex;
    let vehicles = cloneObject(ctx.data.vehicles);

    vehicles[selectedIndex].vehicle.vehicle_type =
      ctx.additionalData.vehicle_type;
    vehicles[selectedIndex].vehicle.vehicle_brand =
      ctx.additionalData.vehicle_brand;
    vehicles[selectedIndex].vehicle.vehicle_model =
      ctx.additionalData.vehicle_model;
    vehicles[selectedIndex].vehicle.vehicle_sub_model =
      ctx.additionalData.vehicle_sub_model;
    vehicles[selectedIndex].vehicle.cckwh = ctx.additionalData.cckwh
      ? ctx.additionalData.cckwh
      : undefined;
    vehicles[selectedIndex].vehicle.engine_type = ctx.additionalData.engine_type
      ? ctx.additionalData.engine_type
      : undefined;
    vehicles[selectedIndex].vehicle.gear_type = ctx.additionalData.gear_type
      ? ctx.additionalData.gear_type
      : undefined;
    vehicles[selectedIndex].vehicle.model_year = ctx.additionalData.model_year;

    return {
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    };
  }

  function modal_redbook_sent_in(ctx) {
    const data = ctx.data.applicationDetail?.applicationDateIn;
    const redbookInfo = ctx.data.redbookInfo;
    return {
      payload: {
        data: {
          canSubmit: "false",
          modalIn: {
            applicationDateIn: data && data != "" ? data : "now()",
            redbook_brand: redbookInfo.brandCode,
            redbook_model: redbookInfo.modelCode,
            sub_model_year: redbookInfo.yearOfModel,
            cckwh: redbookInfo.cckwh,
            gear_type: redbookInfo.gearType,
            sub_model_code: redbookInfo.subModel
          },
        },
      },
    };
  }

  function addClassForCSENTStatus(data) {
    return data.csent_consent_status === "DONE" ? "green-text-color" : null;
  }

  function logContext(ctx) {
    console.log("Context: ", ctx);
  }

  function getDefaultWorkBasketFilteringPayload(filters) {
    return {
      payload: {
        data: {
          workbasket_grid: {
            filters: filters,
          },
        },
      },
    };
  }

  function thaiToIsoDate(dateInThaiTxt) {
    // Expects date string in 'yyyy-MM-dd' format. Example: '2567-02-29'.
    if (!!dateInThaiTxt) {
      const dateParts = dateInThaiTxt.split("-");
      if (dateParts.length == 3 && dateParts[0].length == 4) {
        let year = parseInt(dateParts[0]);
        if (!isNaN(year)) {
          year -= 543;
          const res = year + "-" + dateParts[1] + "-" + dateParts[2];
          return res;
        }
      }
    }

    return null;
  }

  function isoToThaiDate(isoDateTxt) {
    // Expects date string in 'yyyy-MM-dd' format. Example: '2024-01-12'.
    if (!!isoDateTxt) {
      const dateParts = isoDateTxt.split("-");
      if (dateParts.length == 3 && dateParts[0].length == 4) {
        let year = parseInt(dateParts[0]);
        if (!isNaN(year)) {
          year += 543;
          const res = year + "-" + dateParts[1] + "-" + dateParts[2];
          return res;
        }
      }
    }

    return null;
  }

  function dateToAge(date) {
    if (!date) return "-";

    const [year, month, day] = date.toString().split("-");

    const y = Number.parseInt(year);
    // the month is 0-indexed
    const m = typeof month === "number" ? Number.parseInt(month) - 1 : month;
    const d = Number.parseInt(day);

    if (isNaN(y) | isNaN(m) | isNaN(d)) {
      return "-";
    }

    const dob = new Date(y, m, d);
    const now = new Date();

    if (now < dob) {
      return "-";
    }

    const age = now.getFullYear() - dob.getFullYear();

    if (
      now.getMonth() < dob.getMonth() ||
      (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())
    ) {
      return age - 1;
    }

    return age;
  }

  function dateToAgeYearAndMonth(date) {
    if (!date) return "-";

    const [year, month, day] = date.toString().split("-");

    const y = Number.parseInt(year);
    const m = Number.parseInt(month);
    const d = Number.parseInt(day);

    if (isNaN(y) | isNaN(m) | isNaN(d)) {
      return "-";
    }
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    let ageYears = currentYear - y;
    let ageMonths = currentMonth - m;

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    return `${
      ageYears ? `${ageYears} year${ageYears > 1 ? `s` : ""}` : ""
    }${ageMonths ? ` ${ageMonths} month${ageMonths > 1 ? "s" : ""}` : ""}`;
  }

  function dateAgeToColor(dob) {
    const age = dateToAge(dob);

    if (isNaN(age)) {
      return "text.primary";
    } else if (age < 18) {
      return "error.main";
    } else {
      return "success.main";
    }
  }

  function date_column_converter(val) {
    if (!val) return val;

    try {
      return new Date(val).toLocaleDateString("th-TH", {
        day: "numeric",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    } catch {
      return val;
    }
  }

  function sla_converter(duration) {
    if (duration != null) {
      const interval = utils.moment.duration(duration, "minutes");
      const days = interval.days();
      const hours = interval.hours();
      const minutes = interval.minutes();
      const daysFormatted = days > 0 ? `${days}D ` : "";
      return `${daysFormatted}${hours.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}:${minutes.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;
    }
    return "-";
  }

  function toggle_document_visibility(context) {
    return {
      payload: {
        data: {
          documentOn: !context.data.documentOn,
        },
      },
    };
  }

  function toggle_section_visibility(context) {
    console.log(context);
    return {
      payload: {
        data: {
          documentOn: !context.data.documentOn,
        },
      },
    };
  }

  function document_visibility(context) {
    return context?.documentOn ? "on" : "off";
  }

  function section_visibility(context) {
    return context?.documentOn ? "on" : "off";
  }

  function register_contract_no_not_readonly(context) {
    const formData = context?.newloan;
    const notReadOnlyProductType = [
      "MCMC Existing",
      "Topup",
      "Assignment",
    ].includes(formData?.product_type);
    return formData?.product_group === " Auto" && notReadOnlyProductType;
  }

  function csentBorrowerIsActive(data) {
    if (localStorage.isDebug) {
      console.log("CSentBorrowersList data: ", data);
    }

    return data?.isActive ? "active" : "other";
  }

  function get_filter(value, logic, field, operator) {
    return value !== undefined && value !== null
      ? {
          logic,
          filters: [
            {
              field,
              operator,
              value,
            },
          ],
        }
      : null;
  }

  function default_form_search_criteria(form) {
    const objAssignedEntries = Object.entries(form).filter(
      ([key, value]) => value !== undefined && value !== null
    );
    const canSubmit =
      form !== undefined &&
      form.constructor === Object &&
      objAssignedEntries.length > 0;

    const error_modal = !canSubmit
      ? {
          title: "Filter error",
          text: "Please select one of the filter option",
        }
      : undefined;

    return {
      payload: {
        data: {
          canSubmit,
          error_modal,
        },
      },
    };
  }

  function getDateFromDateTo(date) {
    const dateFrom = Boolean(date)
      ? Boolean(date.from)
        ? thaiToIsoDate(date.from)
        : thaiToIsoDate(date)
      : null;
    const dateTo = Boolean(date)
      ? Boolean(date.to)
        ? thaiToIsoDate(date.to)
        : thaiToIsoDate(date)
      : null;
    return {
      dateFrom: dateFrom && dateFrom + "T00:00:00.000",
      dateTo: dateTo && dateTo + "T23:59:59.999",
    };
  }

  function grid_filter(search, gridName) {
    const docInDateTimeRange = getDateFromDateTo(search.doc_in_datetime);
    const docInOneDateTime = getDateFromDateTo(search.doc_in_one_datetime);
    const registrationDate = getDateFromDateTo(search.registration_date);
    const settlementDateFrom = getDateFromDateTo(
      search.account_settlement_date_from
    );
    const settlementDateTo = getDateFromDateTo(
      search.account_settlement_date_to
    );

    const filters = [
      get_filter(
        search.application_group,
        "and",
        "application.application_group.code",
        "eq"
      ),
      get_filter(
        search.application_type,
        "and",
        "application.application_type.code",
        "eq"
      ),
      get_filter(search.indexing_type, "and", "indexing_type.code", "eq"),
      get_filter(search.work_object, "and", "work_object", "contains"),
      get_filter(
        search.application_class,
        "and",
        "application.application_class.code",
        "eq"
      ),
      get_filter(
        docInDateTimeRange.dateFrom,
        "and",
        "document_in_datetime",
        "gte"
      ),
      get_filter(
        docInDateTimeRange.dateTo,
        "and",
        "document_in_datetime",
        "lte"
      ),
      get_filter(
        docInOneDateTime.dateFrom,
        "and",
        "document_in_datetime",
        "gte"
      ),
      get_filter(docInOneDateTime.dateTo, "and", "document_in_datetime", "lte"),
      get_filter(
        registrationDate.dateFrom,
        "and",
        "application.create_date_time",
        "gte"
      ),
      get_filter(
        registrationDate.dateTo,
        "and",
        "application.create_date_time",
        "lte"
      ),
      get_filter(
        search.product_group,
        "and",
        "application.primary_account.account.product_group.code",
        "eq"
      ),
      get_filter(
        search.application_channel,
        "and",
        "application.application_channel.code",
        "eq"
      ),
      get_filter(
        search.product_type,
        "and",
        "application.primary_account.account.product_type.code",
        "eq"
      ),
      get_filter(
        search.sub_product_type,
        "and",
        "application.primary_account.account.sub_product.code",
        "eq"
      ),
      get_filter(
        search.customer_name,
        "and",
        "application.primary_borrower.borrower.party.full_name",
        "contains"
      ),
      get_filter(
        search.customer_lastname,
        "and",
        "application.primary_borrower.borrower.party.full_name",
        "contains"
      ),
      get_filter(
        search.document_type,
        "and",
        "application.primary_borrower.borrower.party.reference_type_code.code",
        "eq"
      ),
      get_filter(
        search.document_number,
        "and",
        "primary_document.document.document_number",
        "contains"
      ),
      get_filter(
        search.oc_code_owner_agency,
        "and",
        "application.primary_borrower.borrower.party.oc_code",
        "eq"
      ),
      get_filter(
        search.full_name,
        "and",
        "application.primary_borrower.borrower.party.full_name",
        "contains"
      ),
      get_filter(
        search.application_number,
        "and",
        "application_id",
        "contains"
      ),
      get_filter(
        search.license_plate,
        "and",
        "application.accounts.collaterals.autos.license_plate",
        "contains"
      ),
      get_filter(
        search.province,
        "and",
        "application.accounts.collaterals.autos.province",
        "eq"
      ),
      get_filter(
        search.account_number,
        "and",
        "application.accounts.account_number",
        "contains"
      ),
      get_filter(
        search.first_name,
        "and",
        "application.borrowers.party.name",
        "contains"
      ),
      get_filter(
        search.last_name,
        "and",
        "application.borrowers.party.last_name",
        "contains"
      ),
      get_filter(
        search.product_type,
        "and",
        "application.accounts.product_type.description",
        "eq"
      ),
      get_filter(
        settlementDateFrom.dateFrom,
        "and",
        "application.accounts.account_settlement_date",
        "gte"
      ),
      get_filter(
        settlementDateTo.dateTo,
        "and",
        "application.accounts.account_settlement_date",
        "lte"
      ),
      get_filter(
        search.application_number,
        "and",
        "application_id",
        "contains"
      ),
      get_filter(
        search.license_plate,
        "and",
        "application.accounts.account_collaterals.autos.license_plate",
        "contains"
      ),
      get_filter(
        search.province,
        "and",
        "application.accounts.account_collaterals.autos.province",
        "eq"
      ),
      get_filter(
        search.account_number,
        "and",
        "application.accounts.account_number",
        "contains"
      ),
      get_filter(
        search.first_name,
        "and",
        "application.borrowers.party.name",
        "contains"
      ),
      get_filter(
        search.last_name,
        "and",
        "application.borrowers.party.last_name",
        "contains"
      ),
      get_filter(
        search.product_type,
        "and",
        "application.accounts.product_type.description",
        "eq"
      ),
      get_filter(
        settlementDateFrom.dateFrom,
        "and",
        "application.accounts.account_settlement_date",
        "gte"
      ),
      get_filter(
        settlementDateTo.dateTo,
        "and",
        "application.accounts.account_settlement_date",
        "lte"
      ),
      get_filter(search.unit, "and", "application.accounts.unit", "eq"),
      get_filter(
        search.status_work,
        "and",
        "application.status_work.code",
        "eq"
      ),
      get_filter(
        search.guarantor_firstname,
        "and",
        "application.borrowers.party.name",
        "contains"
      ),
      get_filter(
        search.guarantor_lastname,
        "and",
        "application.borrowers.party.last_name",
        "contains"
      ),
      get_filter(search.positionCode, "and", "code", "contains"),
      get_filter(search.groupsPositionCode, "and", "group_code", "contains"),
      get_filter(search.groupsPositionName, "and", "group_name", "contains"),
      get_filter(search.positionName, "and", "description", "contains"),
    ].filter(Boolean);

    // Exclude non-regular apps from searching by app number
    if (search.application_number) {
      filters.push(
        get_filter(
          search.application_number,
          "and",
          "application.application_id",
          "contains"
        )
      );
      filters.push(
        get_filter(
          "Regular",
          "and",
          "application.application_system_type_id",
          "eq"
        )
      );
    }

    if (search.guarantor_firstname || search.guarantor_lastname) {
      filters.push(
        get_filter(
          "03",
          "and",
          "application.borrowers.party.appl_guarantees.party_type_id",
          "eq"
        )
      );
    }

    return {
      payload: {
        data: {
          [gridName]: {
            filters,
            pagination: {
              pageIndex: 0,
            },
          },
        },
      },
    };
  }

  function reset_grid(ctx) {
    return {
      payload: {
        data: {
          [workBasketGridName]: {
            selection: {},
            pagination: {
              pageIndex: 0,
            },
          },
        },
      },
    };
  }

  function work_basket_filter(ctx) {
    return grid_filter(ctx.data?.search, workBasketGridName);
  }

  function work_list_filter(ctx) {
    return grid_filter(ctx.data?.search_worklist, workListGridName);
  }

  function redbook_filter(ctx) {
    const form = ctx.data?.search;
    const filters = [
      get_filter(form.redbook_brand, "and", "redbook_brand", "eq"),
      get_filter(form.redbook_model, "and", "redbook_model", "eq"),
      get_filter(form.sub_model_year, "and", "sub_model_year", "eq"),
      get_filter(form.cckwh, "and", "cckwh", "eq"),
      get_filter(form.gear_type, "and", "gear_type", "eq"),
      get_filter(form.redbook_sub_model, "and", "redbook_sub_model", "eq"),
    ].filter(Boolean);

    return {
      payload: {
        data: {
          ["redbook_grid"]: {
            filters,
            pagination: {
              pageIndex: 0,
            },
          },
        },
      },
    };
  }

  function apply_grid_search_payload(searchField, search, gridField, filters) {
    const result = {
      payload: {
        data: {},
      },
    };
    if (Boolean(gridField)) {
      result.payload.data[gridField] = { filters };
    }
    if (Boolean(searchField)) {
      result.payload.data[searchField] = search;
    }
    return result;
  }

  function create_mfprofile_filters(form) {
    return [
      get_filter(form.application_number, "and", "application_id", "eq"),
      get_filter(form.project_name, "and", "generalinfo.thai_name", "contains"),
      get_filter(form.project_id, "and", "sub_type_code", "eq"),
      get_filter(form.oc_code?.toString(), "and", "staff.oc_code", "eq"),
      get_filter(form.application_type, "and", "application_type", "eq"),
      get_filter(form.company_name, "and", "company_name", "contains"),
    ].filter(Boolean);
  }

  function followup_updated(value) {
    return value === null ? null : value ? "Y" : "N";
  }

  function followup_Type(value) {
    return value === null ? null : value ? "Internal" : "External";
  }

  function followup_workbasket_filter(ctx) {
    const search = ctx.data?.search;
    const appCreateDate = getDateFromDateTo(search.application_create_date);

    const filters = [
      get_filter(
        search.application_class,
        "and",
        "application.application_class_id",
        "eq"
      ),
      get_filter(
        search.application_number,
        "and",
        "application_id",
        "contains"
      ),
      get_filter(
        appCreateDate.dateFrom,
        "and",
        "application.create_date_time",
        "gte"
      ),
      get_filter(
        appCreateDate.dateTo,
        "and",
        "application.create_date_time",
        "lte"
      ),
      get_filter(
        search.customer_name,
        "and",
        "application.primary_borrower.borrower.party.name",
        "contains"
      ),
      get_filter(
        search.customer_lastname,
        "and",
        "application.primary_borrower.borrower.party.last_name",
        "contains"
      ),
      //get_filter(search.origin_station, "and", "from_task.task_type.station_code", "eq"),
      get_filter(search.status, "and", "status", "eq"),
    ].filter(Boolean);

    filters.push(
      search.followup_times
        ? get_filter(
            search.followup_times,
            "and",
            "no_of_followups",
            search.followup_times >= 4 ? "gte" : "eq"
          )
        : get_filter("3", "and", "no_of_followups", "lte")
    );

    return {
      payload: {
        data: {
          [workBasketGridName]: {
            filters,
            pagination: {
              pageIndex: 0,
            },
          },
        },
      },
    };
  }

  function mfprofile_worklist_filter(ctx) {
    const form = ctx.data.work_list_search;
    const filters = create_mfprofile_filters(form);
    return apply_grid_search_payload(
      "work_list_search",
      form,
      workListGridName,
      filters
    );
  }

  function mfprofile_workbasket_filter(ctx) {
    const form = ctx.data.search;
    const filters = create_mfprofile_filters(form);
    return apply_grid_search_payload(
      "search",
      form,
      workBasketGridName,
      filters
    );
  }

  function clear_search(ctx, searchName, gridName) {
    const search = { ...(ctx.data?.[searchName] || {}) };
    for (const key in search) {
      search[key] = undefined;
    }

    return {
      payload: {
        data: {
          [searchName]: search,
          [gridName]: {
            filters: [],
            pagination: {
              pageIndex: 0,
            },
          },
        },
      },
    };
  }

  function clear_work_basket_search(ctx) {
    return clear_search(ctx, workBasketSearchName, workBasketGridName);
  }

  function clear_work_list_search(ctx) {
    return clear_search(ctx, workListSearchName, workListGridName);
  }

  function check_search_criteria(ctx, searchName) {
    let searchData = ctx.data?.[searchName] || {};
    return {
      payload: {
        data: {
          canSubmit: !!Object.keys(searchData).filter((i) => searchData[i])
            .length,
        },
      },
    };
  }

  function check_qc_user_task_type_id(ctx) {
    let taskTypeId = ctx.data?.taskTypeId || "";
    return {
      payload: {
        data: {
          isQcUser: taskTypeId == "QCUser",
        },
      },
    };
  }

  function check_qc_user_task_type_id(ctx) {
    let taskTypeId = ctx.data?.taskTypeId || "";
    return {
      payload: {
        data: {
          isQcUser: taskTypeId == "QCUser",
        },
      },
    };
  }

  function moveSelectedToUnselectCheckbox(ctx) {
    const unselected = structuredClone(ctx.data.unselected)
    const selected = structuredClone(ctx.data.selected)
    const checkedItems = selected.filter(obj => {
      if (obj.checked) {
        obj.checked = false
        unselected.push(obj);
        return false;
      }
      return true;
    });

    return {
      payload: {
        data: {
          selected: checkedItems,
          unselected
        },
      },
    };
  }

  function moveItems(ctx, targetKey, sourceKey) {
    const target = structuredClone(ctx.data[targetKey]);
    const source = structuredClone(ctx.data[sourceKey]);

    const sourceFiltered = source.filter(obj => {
      if (obj.checked) {
        obj.checked = false
        target.push(obj);
        return false;
      }
      return true;
    });

    return {
      payload: {
        data: {
          [targetKey]: target,
          [sourceKey]: sourceFiltered,
        },
      },
    };
  }

  function moveSelectedToUnselectCheckbox(ctx) {
    return moveItems(ctx, 'unselected', 'selected');
  }

  function moveUnselectedToSelectCheckbox(ctx) {
    return moveItems(ctx, 'selected', 'unselected');
  }

  function moveAllToSelectedCheckbox(ctx) {
    return {
      payload: {
        data: {
          selected: [...ctx.data.selected, ...ctx.data.unselected],
          unselected: [],
        },
      },
    };
  }

  function moveAllToUnselectedCheckbox(ctx) {
    return {
      payload: {
        data: {
          selected: [],
          unselected: [...ctx.data.selected, ...ctx.data.unselected],
        },
      },
    };
  }

  function check_work_list_search_criteria(ctx) {
    return check_search_criteria(ctx, workListSearchName);
  }

  function check_work_basket_search_criteria(ctx) {
    return check_search_criteria(ctx, workBasketSearchName);
  }

  function check_position_management_search_criteria(ctx) {
    const canSubmit = Boolean(
      ctx.data.search?.positionCode || ctx.data.search?.positionName
    );

    return {
      payload: {
        data: {
          canSubmit,
        },
      },
    };
  }

  function clear_position_management_search_criteria(
    ctx,
    searchName,
    gridName
  ) {
    return clear_search(ctx, workBasketSearchName, workbasketGridFU);
  }

  function check_groups_and_positions_search_criteria(ctx) {
    const canSubmit = Boolean(
      ctx.data.search?.groupsPositionCode || ctx.data.search?.groupsPositionName
    );

    return {
      payload: {
        data: {
          canSubmit,
        },
      },
    };
  }

  function clear_position_management_search_criteria(
    ctx,
    searchName,
    gridName
  ) {
    return clear_search(ctx, workBasketSearchName, workBasketGridName);
  }

  function clear_filter_object(searchObject) {
    if (Boolean(searchObject)) {
      const keys = Object.keys(searchObject);
      const setDefaultValue = (obj, i) => {
        obj[i] = undefined;
        return obj;
      };
      searchObject = keys.reduce(setDefaultValue, {});
    }

    return searchObject;
  }

  function clear_filter_worklist(context) {
    const search = clear_filter_object(context.data?.search);
    return apply_grid_search_payload(
      workBasketSearchName,
      search,
      workListGridName,
      []
    );
  }

  function clear_filter_workbasket(context) {
    const search = clear_filter_object(context.data?.search_basket);
    return apply_grid_search_payload(
      "search_basket",
      search,
      workBasketGridName,
      []
    );
  }

  function check_worklist_search_criteria(ctx) {
    const form = ctx.data?.search;
    return default_form_search_criteria(form);
  }
  function check_workbasket_search_criteria(ctx) {
    const form = ctx.data?.search_basket;
    return default_form_search_criteria(form);
  }

  function tempIndexing_canSubmit(ctx) {
    const data = ctx.data;
    const isFoundAppUsingSearchFunctionality =
      data.search_result && data.search_result.length > 0;
    const isAppNumberGeneratedBySystem =
      data.is_application_number_generated && data.application_number;
    const isAppNumberProvidedManually =
      !data.is_application_number_generated && data.application_number;

    return {
      payload: {
        data: {
          canSubmit: !!(
            isFoundAppUsingSearchFunctionality ||
            isAppNumberGeneratedBySystem ||
            isAppNumberProvidedManually
          ),
        },
      },
    };
  }

  function tempIndexing_cancel(ctx) {
    const data = ctx.data;

    return {
      payload: {
        data: {
          canCancel: !data.application_number,
          isAppNumberGenerated: data.is_application_number_generated,
        },
      },
    };
  }

  function indexingcc_checking_search_fields(context) {
    const {
      application_number: appNum,
      id_number: idNum,
      loan_account_number: loanAccNum,
      customer_name: name,
    } = context?.data;

    const status =
      appNum === undefined &&
      idNum === undefined &&
      loanAccNum === undefined &&
      name === undefined
        ? "form_invalid"
        : "form_valid";

    console.log("status: " + status);

    return {
      payload: {
        data: {
          status: status,
        },
      },
    };
  }

  function indexingTC_selectedApproved(ctx) {
    console.log("Context: ", ctx);
    let result = true;
    const data = ctx.data;

    if (data.application_group === "Mortgage") {
      const applications = data.applications;
      const selectedIndex = data?.hasOwnProperty("selectedIndex")
        ? true
        : false;
      if (!selectedIndex) {
        result = false;
      } else {
        const index = data?.selectedIndex;
        const rccoStatus = applications[index].status_RCCO;
        if (rccoStatus != "Approved") {
          result = false;
        }
      }

      return {
        payload: {
          data: {
            result: result,
          },
        },
      };
    } else {
      return {
        payload: {
          data: {
            result: result,
          },
        },
      };
    }
  }

  function indexingTC_selectedAll(ctx) {
    console.log("Context: ", ctx);
    const data = ctx.data;

    if (data.application_group === "Auto") {
      const applications = data.applications;
      if (
        applications[0].loan_accounts[0].sub_product_type_id === "0013" ||
        applications[0].loan_accounts[0].sub_product_type_id === "0015"
      ) {
        const isChecked = applications.every((a) => {
          return (
            (a.loan_accounts[0].sub_product_type_id === "0013" ||
              a.loan_accounts[0].sub_product_type_id === "0015") &&
            a.isChecked
          );
        });
        return {
          payload: {
            data: {
              result: isChecked,
            },
          },
        };
      }
      return {
        payload: {
          data: {
            result: true,
          },
        },
      };
    } else {
      return {
        payload: {
          data: {
            result: true,
          },
        },
      };
    }
  }

  function indexingTC_selectedIndex(ctx) {
    console.log("Context: ", ctx);
    const data = ctx.data;

    if (data.application_group === "Mortgage") {
      let result = true;
      const selectedIndex = data?.hasOwnProperty("selectedIndex")
        ? true
        : false;
      if (!selectedIndex) {
        result = false;
      }

      return {
        payload: {
          data: {
            result: result,
          },
        },
      };
    } else {
      const isSelected = data.applications.some((a) => a.isChecked);
      console.log("indexingTC_selectedIndex: ", isSelected);
      return {
        payload: {
          data: {
            result: isSelected,
          },
        },
      };
    }
  }

  function indexingTC_isMortgageCheck(ctx) {
    console.log("Context: ", ctx);

    return {
      payload: {
        data: {
          result: ctx.data.application_group === "Mortgage",
        },
      },
    };
  }

  function register_populate_AddLoan(ctx) {
    const data = ctx.data.application_details;
    const newLoan = ctx.additionalData?.seq
      ? ctx.additionalData
      : {
          seq: undefined,
          contract_no: undefined,
          application_group: data?.application_group,
          product_group: ctx.data?.loanSection?.newLoan?.product_group || "",
          product_group_id:
            ctx.data?.loanSection?.newLoan?.product_group_id || "",
          product_type: data?.product_type,
          sub_product: data?.sub_product,
        };

    return {
      payload: {
        data: {
          loanSection: {
            allowAddLoan:
              Boolean(newLoan.application_group) &&
              Boolean(newLoan.product_group),
            newLoan,
          },
        },
      },
    };
  }

  function register_save_loan(context) {
    const loanData = { ...context.data.loanSection.newLoan };
    let loans = [...(context.data.loanSection.loans || [])];
    let applAccount =  { ...context.data.appl_account};
    const shouldAddLoan = !Boolean(loanData.seq);
    if (shouldAddLoan) {
      loanData.id = context.data.taskId;
      loanData.seq = loans.reduce((a, b) => Math.max(a, b.seq), 0) + 1;
      loanData.application_account_id = uuidv4();
    }
    let hasError = false;
    let error_modal = undefined;
    if (loanData.application_group !== "MG") {
      const registerLoanDuplicates = (loan) =>
        loan.seq !== loanData.seq &&
        loan.product_group === loanData.product_group &&
        loan.product_type === loanData.product_type &&
        loan.sub_product === loanData.sub_product &&
        loan.application_account_id === loanData.application_account_id;
      const loanDuplicates = loans.filter(registerLoanDuplicates);
      hasError = loanDuplicates.length > 0;
    }
    if (!hasError) {
      if (!shouldAddLoan) {
        loans = loans.filter((i) => i.seq !== loanData.seq);
      }
      loans.push(loanData);
    } else {
      error_modal = {
        title: "Error",
        text: "Loan with such parameters already existsDuplicateError",
      };
    }
    if(loanData.application_group == "Unsecured") {
      applAccount.product_type = loanData.product_type
      applAccount.sub_product_type = loanData.sub_product
    }

    loans.sort((a, b) => parseInt(a.seq) - parseInt(b.seq));
    let clonedLoans = loans.map((loan) => ({ ...loan }));
    clonedLoans.forEach((loan, index) => {
      loan.seq = index + 1;
    });
    loans = clonedLoans;

    return {
      payload: {
        data: {
          emptyLoans: loans.length == 0 ? true : false,
          loanSection: { loans, hasError, error_modal },
          appl_account: applAccount
        },
      },
    };
  }

  function registerAddBorrowerPopulateAddAddress(context) {
    const addAddressForm = { ...context.data.addAddress } || {};

    switch (context.data.borrowerType) {
      case "Individual":
        addAddressForm.addressUsageEnum =
          context.data.dictionaries.addressUsageIndividualEnum;
        break;
      case "Juristic":
        addAddressForm.addressUsageEnum =
          context.data.dictionaries.addressUsageJuristicEnum;
        break;
      default:
        throw "borrowerType must be defined";
    }

    addAddressForm.addressSourceEnum = (context.data.addresses || []).map(
      (x, index) => ({ value: index + "", label: x.address_usageLabel })
    );
    addAddressForm.addressSourceEnabled =
      addAddressForm.addressSourceEnum.length > 0;
    addAddressForm.addressSource = undefined;
    addAddressForm.address_usage = undefined;

    return {
      payload: {
        data: {
          addAddress: addAddressForm,
        },
      },
    };
  }

  function registerAddBorrowerAddAddress(context) {
    const addresses = [...(context.data.addresses || [])];

    const previousAddressIndex =
      context.data.addAddress.addressSource != null
        ? parseInt(context.data.addAddress.addressSource)
        : -1;
    const address = addresses[previousAddressIndex]
      ? { ...addresses[previousAddressIndex] }
      : {};

    address.address_usage = context.data.addAddress.address_usage;
    address.address_usageLabel = context.data.addAddress.addressUsageEnum.find(
      (x) => x.value == context.data.addAddress.address_usage
    ).label;

    if (address.address_usage != "CurrentAddress") {
      address.address_format = undefined;
      address.address_owner = undefined;
      address.residence_period = undefined;
      address.residence_expenses = undefined;
    }

    addresses.push(address);

    return {
      payload: {
        data: {
          addresses,
        },
      },
    };
  }

  function register_DeleteLoan(ctx) {
    console.log("register_DeleteLoan: " + JSON.stringify(ctx, 0, 2));
    const loanToDelete = ctx.additionalData;
    if (Boolean(loanToDelete?.seq)) {
      let loans = [...(ctx.data.loan_account || [])].filter(
        (i) => i.seq !== loanToDelete.seq
      );

      loans.sort((a, b) => parseInt(a.seq) - parseInt(b.seq));
      let clonedLoans = loans.map((loan) => ({ ...loan }));
      clonedLoans.forEach((loan, index) => {
        loan.seq = index + 1;
      });
      loans = clonedLoans;

      return {
        payload: {
          data: {
            loan_account: loans,
          },
        },
      };
    }
    return {
      payload: {
        data: {},
      },
    };
  }

  function deleteLoan(ctx) {
    const loanToDelete = ctx?.data?.loans;
    let loans = [...(ctx.data.loanSection.loans || [])].filter(
      (i) => i.seq !== loanToDelete.seq
    );

    loans.sort((a, b) => parseInt(a.seq) - parseInt(b.seq));
    let clonedLoans = loans.map((loan) => ({ ...loan }));
    clonedLoans.forEach((loan, index) => {
      loan.seq = index + 1;
    });
    loans = clonedLoans;

    setLocalStorage("Register_Loan_Collateral_Details");

    return {
      payload: {
        data: {
          emptyLoans: loans.length == 0 ? true : false,
          loanSection: {
            loans: loans,
          },
          accountNumber: undefined,
          appl_account: {
            requested_amount: undefined,
            net_amount_pvd: undefined,
            company_code_pvd: undefined,
            member_code_pvd: undefined,
            loan_tenor_month_pvd: undefined,
            pn_payment_method: undefined,
            loan_purpose_code: undefined,
            account_number: undefined,
            accountNumber: undefined,
            accountName: undefined,
            accountStatus: undefined,
            accountStatusCode: undefined
          }
        },
      },
    };
  }

  function workbasket_filter_clear(ctx) {
    const data = ctx?.data;
    if (data) {
      data.search = {};
    }

    const res = getDefaultWorkBasketFilteringPayload([]);
    return { ...res };
  }

  function workbasket_get_top_task() {
    const grid = document.getElementById("WorkBasket");
    if (grid) {
      const gridContainer = grid.querySelector(".k-grid-table .k-table-tbody");
      if (gridContainer) {
        const firstRow = gridContainer.firstChild;
        if (firstRow && firstRow.nodeName === "TR") {
          const cmdCell = firstRow.lastChild;
          if (cmdCell) {
            const btn = cmdCell.querySelector(
              '.action-cell-content a[title="Get Task"]'
            );
            if (btn) {
              btn.click();
            }
          }
        }
      }
    }

    return {};
  }

  function go_home_from_success(context) {
    const url = context?.data?.home_url;
    if (url) {
      window.location.replace(url);
    } else {
      console.warn("Home URL was not found. Context: ", context);
    }
  }

  function autocompleteDataConverter(data) {
    if (!data) return "";
    const individual = data.ngl_appl_party.map((object) => ({
      value: object.full_name,
      label: object.full_name,
    }));
    const juristic = data.ngl_appl_party_juristic_info.map((object) => ({
      value: object.juristic_name,
      label: object.juristic_name,
    }));
    const result = [...individual, ...juristic];
    result.splice(10);
    return result;
  }

  function inputToQueryVariables(input, partialQuery) {
    if (!input || !partialQuery) return null;

    if (input.length >= partialQuery) {
      return {
        customerName: `${input}`,
        limit: 10,
      };
    }

    return null;
  }

  function qc_autocompleteDataConverter(data) {
    console.log('qc_autocompleteDataConverter:', data)
    if (!data) return "";
    const dataResult = data.map((object) => ({
      value: object.dealer_code,
      label: object.dealer_code,
    }));
    const result = [...dataResult];
    return result;
  }

  function inputToAutoCompleteQueryVariables(input, partialQuery) {
    if (!input || !partialQuery) return null;

    if (input.length >= partialQuery) {
      return {
        searchValue: `%${input}%`,
        limit: 10,
      };
    }

    return null;
  }

  function autocompleteBaseConverter(data) {
    if (!data) return "";
    const result = data.map((object) => ({
      value: object.value,
      label: object.label,
    }));
    result.splice(10);
    return result;
  }

  function autoCompleteOcCodeEnumConverter(data) {
    if (!data) return "";
    const result = data.map((object) => ({
      value: object.value,
      label: `${object.value} - ${object.label}`,
    }));
    result.splice(10);
    return result;
  }

  function autoCompleteStandartCodeEnumConverter(data) {
    if (!data) return "";
    const result = data
      .filter((i) => i.standard_list_code === "N066")
      .map(({ id, display_value }) => ({ value: id, label: display_value }));
    result.splice(10);
    return result;
  }

  function inputToQueryVariables(input, partialQuery) {
    if (!input || !partialQuery) return null;

    if (input.length >= partialQuery) {
      return {
        customerName: `${input}`,
        limit: 10,
      };
    }

    return null;
  }

  function date_to_days_and_hours_passed(date) {
    const currentDate = new Date();
    const initialDate = Date.parse(date);
    const diff = currentDate - initialDate;
    if (diff < 60 * 60 * 1000) return "less than a hour ago";
    if (diff < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(diff / (60 * 60 * 1000));
      if (hours == 1) return hours + " hour ago";
      return hours + " hours ago";
    } else {
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      const timeLeft = diff - days * (24 * 60 * 60 * 1000);
      const hours = Math.floor(timeLeft / (60 * 60 * 1000));
      let template = "";
      if (days == 1) {
        template = days + " day";
      } else {
        template = days + " days";
      }
      if (hours == 0) {
        template = template + " ago";
      } else if (hours == 1) {
        template = template + ", " + hours + " hour ago";
      } else {
        template = template + ", " + hours + " hours ago";
      }
      return template;
    }
  }

  function mapValueLabel(data) {
    if (!data) return;
    return data.map((code) => ({
      value: code.value,
      label: code.label,
    }));
  }

  function mapAndConvertValueLabel(data) {
    if (!data) return;
    return data.map((code) => ({
      value: "" + code.value,
      label: code.label,
    }));
  }

  function mapIdLabel(data) {
    if (!data) return;
    return data.map((v) => ({
      value: "" + v.id,
      label: v.label,
    }));
  }

  function mapCodeLabel(data) {
    if (!data) return;
    return data.map((key) => ({
      value: key.code,
      label: key.label,
    }));
  }

  function mapFullNameValue(data) {
    if (!data) return;
    return data.map((key) => ({
      value: key.value.full_name,
      label: key.label.full_name,
    }));
  }

  function mapStaffNameValue(data) {
    if (!data) return;
    return data.map((key) => ({
      value: key.value,
      label: key.staff_name
        ? `${key.staff_title} ${key.staff_name} ${key.staff_surname}`
        : `${key.staff_title} ${key.staff_surname}`,
    }));
  }

  function mapInsuranceType(data) {
    console.log("mapInsuranceType: ", data);
    if (!data) return;

    window.insuranceType = data;

    return data.map((key) => ({
      value: key.value,
      label: key.label,
    }));
  }

  function insuranceTypeListener(insuranceType, ctx) {
    let lifeInsure = ctx.life_insurance ? { ...ctx.life_insurance } : {};

    if (insuranceType === "") {
      return lifeInsure;
    }

    let insuranceTypeObj = window.insuranceType.find(
      (item) => item.value === insuranceType
    );

    lifeInsure.auto_cal_insurance_borrower =
      insuranceTypeObj.auto_cal_insurance_borrower;
    lifeInsure.auto_cal_insurance_guarantor =
      insuranceTypeObj.auto_cal_insurance_guarantor;

    lifeInsure.the_insured_type = lifeInsure.the_insured_type || "00";

    if (window?.backuplifeInsuranceType !== lifeInsure.insurance_type) {
      window.backuplifeInsuranceType = lifeInsure.insurance_type;

      if (
        (!!lifeInsure.auto_cal_insurance_borrower &&
          lifeInsure.the_insured_type === "01") ||
        (!!lifeInsure.auto_cal_insurance_guarantor &&
          lifeInsure.the_insured_type === "02")
      ) {
        lifeInsure.sum_insured = "";
        lifeInsure.premium_amount = "";
        lifeInsure.insurance_duration = "";
        lifeInsure.isAutoCalculation = true;
      } else {
        lifeInsure.sum_insured = "";
        lifeInsure.premium_amount = "";
        lifeInsure.insurance_duration = "";
        lifeInsure.isAutoCalculation = false;
      }
    }

    if (lifeInsure.the_insured_type === "01") {
      lifeInsure.insurance_type_code = {
        insurance_plan_code: "C1",
        insurance_duration_code: lifeInsure.auto_cal_insurance_borrower,
      };
    }
    if (lifeInsure.the_insured_type === "02") {
      lifeInsure.insurance_type_code = {
        insurance_plan_code: "G1",
        insurance_duration_code: lifeInsure.auto_cal_insurance_guarantor,
      };
    }

    return lifeInsure;
  }

  function mapValueLabelOneParameter(data) {
    if (!data) return;
    return data.map((code) => ({
      value: `${code.label}`,
      label: `${code.label}`,
    }));
  }

  function indexingtc_checking_search_fields(context) {
    const {
      application_number: appNum,
      card_id_number: idNum,
      loan_account_number: loanAccNum,
      customer_name: name,
    } = context?.data;

    const status =
      (appNum ?? idNum ?? loanAccNum ?? name) === undefined
        ? "form_invalid"
        : "form_valid";

    return {
      payload: {
        data: {
          status: status,
        },
      },
    };
  }

  function map_ncb_history(data) {
    const ncbHistoryBorrowerInfo = [
      { ...data.additionalData.ncbHistoryBorrowerInfo },
    ];
    const ncbHistory = [...data.additionalData.ncbHistory];

    return {
      payload: {
        data: {
          ncbHistoryBorrowerInfo,
          ncbHistory,
        },
      },
    };
  }

  function map_fu_history(data) {
    console.log("fu_history_data", data);
    const rowData = data.additionalData;
    rowData.remark = rowData.remark || undefined;
    const isPending = Boolean(rowData.status === "Pending");
    return {
      payload: {
        data: {
          fuHistoryRow: rowData,
          isPending
        },
      },
    };
  }

  function getSalesPersonInfo(data) {
    const salesPersonSearchResult = {
      saleId: data.additionalData.employeeId,
      firstAndLastName: data.additionalData.firstAndLastName,
      branch: data.additionalData.branch,
      ocCode: data.additionalData.ocCode || "",
      phone1: data.additionalData.phoneNumbers[0] || "",
      phone2: data.additionalData.phoneNumbers[1] || "",
      phone3: data.additionalData.phoneNumbers[2] || "",
    };
    console.log(
      "Context: ",
      data,
      "salesPersonSearchResult",
      salesPersonSearchResult
    );

    return { payload: { data: { salesPersonSearchResult } } };
  }

  function deleteBorrowerData(...args) {
    console.log("Arguments: ", args);
    const data = args[0];
    const documentId = data.additionalData.id;
    console.log("Context: ", data);

    const newBorrowers = data.data.borrowers.map((borrower) => {
      return {
        ...borrower,
        documents: borrower.documents.filter((d) => d.id !== documentId),
        information: borrower.information.filter((i) => i.id !== documentId),
        rc_reshape: borrower.rc_reshape.filter((r) => r.id !== documentId),
      };
    });

    return { payload: { data: { borrowers: newBorrowers, information: [] } } };
  }

  function getRecommendedPersonForEdit(data) {
    console.log("Context: ", data);
    const recommendedPersonForEdit = {
      saleId: data.additionalData.employeeId,
      oldSaleId: data.additionalData.employeeId,
      firstAndLastName: data.additionalData.firstAndLastName,
      branch: data.additionalData.branch,
      ocCode: data.additionalData.ocCode || "",
      phone1: data.additionalData.phoneNumbers[0] || "",
      phone2: data.additionalData.phoneNumbers[1] || "",
      phone3: data.additionalData.phoneNumbers[2] || "",
      externalPerson:
        (data.additionalData.staffTypeGroup &&
          data.additionalData.staffTypeGroup == "002") ||
        false,
    };

    return { payload: { data: { recommendedPersonForEdit } } };
  }

  function getSalesPersonForEdit(data) {
    const salesPersonForEdit = {
      saleId: data.additionalData.employeeId,
      firstAndLastName: data.additionalData.firstAndLastName,
      branch: data.additionalData.branch,
      ocCode: data.additionalData.ocCode || "",
      phone1: data.additionalData.phoneNumbers[0] || "",
      phone2: data.additionalData.phoneNumbers[1] || "",
      phone3: data.additionalData.phoneNumbers[2] || "",
    };

    return { payload: { data: { salesPersonForEdit } } };
  }

  function repeatNcbCheck_visibility(_data, row_item) {
    return row_item.rowData.isRepeatNcbCheckShown;
  }

  function sendForInspectionYourself_visibility(_data, row_item) {
    return row_item.rowData.isSendForInspectionYourselfShown;
  }

  function openDocumentumLink(ctx) {
    console.log("inside openDocumentumLink", ctx.data.documentDetails?.url);
    if (ctx.data.documentDetails?.url) {
      console.log("opening openDocumentumLink", ctx.data.documentDetails?.url);
      window.open(ctx.data.documentDetails?.url, "_blank");
    }
  }

  function isSalesPersonInfoFound(ctx) {
    return {
      payload: {
        data: {
          isSalesPersonInfoFound: Boolean(ctx.data.salesPersons.length),
        },
      },
    };
  }

  function isRepeatNcbCheckSelected(ctx) {
    return {
      payload: {
        data: {
          isRepeatNcbCheckSelected: ctx.data.borrowersInformation.some(
            (bor) => bor.repeatNcbCheck
          ),
        },
      },
    };
  }

  function thaiPostalEnumsForAddresses(data, context) {
    const mapper = (obj, province, amphur) => {
      if (!obj) return [];
      const cacheKey = `${province ?? ""}|${amphur ?? ""}`;
      let res = window.thaiPostalsCache[cacheKey];
      if (!res) {
        res = Object.keys(obj).map((x) => ({ value: x, label: x }));
        window.thaiPostalsCache[cacheKey] = res;
      }
      return res;
    };

    if (context.thaiPostalsDic) {
      window.thaiPostalsDic = context.thaiPostalsDic;
    }
    const thaiPostals = window.thaiPostalsDic;
    return Array.isArray(data)
      ? data.map((row) => {
          const amphur = thaiPostals[row?.province];
          const tambon = amphur?.[row?.amphur];
          return {
            ...row,
            province_enum: mapper(thaiPostals),
            amphur_enum: mapper(amphur, row?.province),
            tambon_enum: mapper(tambon, row?.province, row?.amphur),
            zipcode_enum: tambon?.[row?.tambon] ?? [],
          };
        })
      : data;
  }

  function cacheThaiPostalsDic(_, context) {
    if (context.thaiPostalsDic) {
      window.thaiPostalsDic = context.thaiPostalsDic;
    }
    return undefined;
  }

  function checkIsAddressesEmpty(_, context) {
    return (context?.addresses ?? []).length == 0;
  }

  function filterProvince(ctx) {
    window.initialThaiPostals = ctx?.thaiPostals;
    const thaiPostals = initialThaiPostals;
    let province = [];
    if (thaiPostals) {
      province = thaiPostals.reduce((cur, item) => {
        if (!cur.some((c) => c.label == item.provinceThaiName)) {
          cur.push({
            value: item.provinceThaiName,
            label: item.provinceThaiName,
          });
        }
        return cur;
      }, []);
    }

    return province ? province : null;
  }

  function filterAmphur(province) {
    let district = [];
    const thaiPostals = initialThaiPostals;
    if (thaiPostals) {
      district = thaiPostals.reduce((cur, item) => {
        if (
          item.provinceThaiName == province &&
          !cur.some((c) => c.label == item.districtThaiName)
        ) {
          cur.push({
            value: item.districtThaiName,
            label: item.districtThaiName,
          });
        }
        return cur;
      }, []);
    }

    return district ? district : null;
  }

  function filterTambon(province, district) {
    let subdistrict = [];
    const thaiPostals = initialThaiPostals;
    if (thaiPostals) {
      subdistrict = thaiPostals.reduce((cur, item) => {
        if (
          item.provinceThaiName == province &&
          item.districtThaiName == district &&
          !cur.some((c) => c.label == item.subdistrictThaiName)
        ) {
          cur.push({
            value: item.subdistrictThaiName,
            label: item.subdistrictThaiName,
          });
        }
        return cur;
      }, []);
    }

    return subdistrict ? subdistrict : null;
  }

  function filterZipcode(province, district, subdistrict) {
    let zipcode = [];
    const thaiPostals = initialThaiPostals;
    if (thaiPostals) {
      zipcode = thaiPostals.reduce((cur, item) => {
        if (
          item.provinceThaiName == province &&
          item.districtThaiName == district &&
          item.subdistrictThaiName == subdistrict &&
          !cur.some((c) => c.label == item.postalCode)
        ) {
          cur.push({
            value: item.postalCode,
            label: item.postalCode,
          });
        }
        return cur;
      }, []);
    }

    return zipcode ? zipcode : null;
  }

  function initialAmphur(amphur) {
    window.amphur = amphur ? amphur : window.amphur;
    return window.amphur;
  }

  function initialTambon(tambon) {
    window.tambon = tambon ? tambon : window.tambon;
    return window.tambon;
  }

  function initialZipcode(zipcode) {
    window.zipcode = zipcode ? zipcode : window.zipcode;
    return window.zipcode;
  }

  function isCurrentSameRegistrationCheckBox(context) {
    console.log("isCurrentSameRegistrationCheckBox", context);
    var home_address = "";
    var current_address = "";
    var new_address = "";

    if (context.data.address) {
      home_address = context.data.address.find(
        (address) => address.addressUsage === "HomeAddress"
      );
      current_address = context.data.address.find(
        (address) => address.addressUsage === "CurrentAddress"
      );
      new_address;
    }

    // Executing Phone no validations
    // if (context.data.customerInfo?.mobileNo
    //   && context.data.customerInfo?.mobileNo.length
    //   && context.data.customerInfo?.mobileNo.length >0 ){
    const phoneNoValidationOutput = validate_phone_number(
      context.data.customerInfo?.mobileNo,
      true
    );
    if (!phoneNoValidationOutput.isValid) {
      let validation = {
        field: {},
      };
      validation.field["customerInfo.mobileNo"] =
        phoneNoValidationOutput.errorMessage;
      console.log("Returning ", {
        payload: {
          data: {
            ...context.data,
            canSubmit: false,
          },
        },
        validation,
      });
      return {
        payload: {
          data: {
            ...context.data,
            canSubmit: false,
          },
        },
        validation,
      };
    }
    // }
    //

    if (current_address.isCurrentSameRegistration) {
      const new_current_address = {
        ...current_address,
        ...home_address,
        addressUsage: "CurrentAddress",
        isCurrentSameRegistration: true,
        liveYear: current_address.liveYear,
        fosDetail: current_address.fosDetail,
        addressSeq: current_address.addressSeq,
      };
      new_address = context.data.address.map((address) =>
        address.addressUsage === "CurrentAddress"
          ? new_current_address
          : address
      );

      return {
        payload: {
          data: {
            address: new_address,
            canSubmit: true,
          },
        },
      };
    }
    return {
      payload: {
        data: {
          address: context.data.address,
          canSubmit: true,
        },
      },
    };
  }

  function check_null(data) {
    return data ?? "";
  }

  function staff_name(data) {
    return `${data?.title ?? ""}${data?.name ?? ""} ${data?.surname ?? ""}`;
  }

  function sales_buddy_canSubmit(ctx) {
    const data = ctx.data;
    const validate = data.staffId && data.isFindStaffInfo;

    return {
      payload: {
        data: {
          canSubmit: !!validate,
        },
      },
    };
  }

  function setDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day.toString().length === 1) {
      day = `0${day}`;
    }
    if (month.toString().length === 1) {
      month = `0${month}`;
    }
    return `${year}-${month}-${day}`;
  }

  function convertDate(date) {
    const appointmentDateCheck = new Date(date);
    appointmentDateCheck.setFullYear(appointmentDateCheck.getFullYear() - 543);
    return appointmentDateCheck.toISOString().split("T")[0];
  }

  function checkTimeHomeAddress(date) {
    return checkTime(date, "errorTimeHomeAddress");
  }

  function checkDateHomeAddress(date) {
    return checkDate(date, "errorDateHomeAddress");
  }

  function checkTimeCurrentAddress(date) {
    return checkTime(date, "errorTimeCurrentAddress");
  }

  function checkDateCurrentAddress(date) {
    return checkDate(date, "errorDateCurrentAddress");
  }

  function checkTimeWorkAddress(date) {
    return checkTime(date, "errorTimeWorkAddress");
  }

  function checkDateWorkAddress(date) {
    return checkDate(date, "errorDateWorkAddress");
  }
  function checkTimeSecoundAddress(date) {
    return checkTime(date, "errorTimeSecoundAddress");
  }

  function checkDateSecoundAddress(date) {
    return checkDate(date, "errorDateSecoundAddress");
  }

  function checkDate(data, nameError) {
    const dates = [];
    const { appointmentDate } = data;
    // let elementByIdDate = document.getElementsByClassName(nameError);
    // console.log(elementByIdDate[0])
    // let css = elementByIdDate[0].getElementsByClassName("MuiOutlinedInput-notchedOutline")
    if (appointmentDate) {
      const currentDate = new Date();
      const date = new Date(currentDate.setDate(currentDate.getDate() - 1));
      currentDate.setHours(currentDate.getHours());
      let currentHours = Number(currentDate.getHours());
      let currentMins = Number(currentDate.getMinutes());
      const isAfter13 =   (currentHours > 13) || (currentHours === 13 && currentMins > 30);
      let isPassToDay = isAfter13 
      let i = 0;
      while (i < 7) {
        date.setDate(date.getDate() + 1);
        let datePush = setDate(date);
        const dateCheck = new Date(datePush);
        if(isPassToDay){
          isPassToDay = false
          continue;
        }
        if (
          dateCheck.getDay() === 0 ||
          dateCheck.getDay() === 6 ||
          inputFosMasHoliday.includes(datePush)
        ) {
          continue;
        }
        dates.push(datePush);
        i++;
      }
      if (dates.includes(appointmentDate)) {
        errorInputFos[nameError] = "";
        // css[0].style.borderColor = ""
        return true;
      }
      errorInputFos[nameError] = "error";
      // css[0].style.borderColor = "red"
      return false;
    }
    errorInputFos[nameError] = "";
    // css[0].style.borderColor = ""
    return true;
  }

  function checkTime(data, nameError) {
    if (!data) return true;
    const { appointmentTime, appointmentDate } = data;
    // let elementByIdTime = document.getElementsByClassName(nameError);
    // let css = elementByIdTime[0].getElementsByClassName(
    //   "MuiOutlinedInput-notchedOutline"
    // );
    if (appointmentTime) {
      let currentTime = new Date();
      currentTime.setHours(currentTime.getHours());
      const toDay = setDate(currentTime);
      let currentHours = Number(currentTime.getHours());
      let currentMins = Number(currentTime.getMinutes());
      let time = appointmentTime.split(":");
      let hours = Number(time[0]);
      let mins = Number(time[1]);
      let futureHours = currentHours + 4;
      const checkWorkHours =
        (hours > 8 || (hours === 8 && mins >= 30)) &&
        (hours < 17 || (hours === 17 && mins <= 30));
      const checkBookingTime =
        hours > futureHours || (hours === futureHours && mins >= currentMins);
      if (appointmentDate && checkWorkHours) {
        if (toDay !== appointmentDate) {
          errorInputFos[nameError] = "";
          // css[0].style.borderColor = "";
          return true;
        }
        if (toDay === appointmentDate && checkBookingTime) {
          errorInputFos[nameError] = "";
          // css[0].style.borderColor = "";
          return true;
        }
      }
      errorInputFos[nameError] = "error";
      // css[0].style.borderColor = "red";
      return false;
    }
    errorInputFos[nameError] = "";
    // css[0].style.borderColor = "";
    return true;
  }

  function mapDateHoliday(data) {
    if (data) {
      data.map((item) => {
        if (!inputFosMasHoliday.includes(item.holiday_date)) {
          inputFosMasHoliday.push(item.holiday_date);
        }
      });
    }
    return inputFosMasHoliday;
  }

  function checkCanSubmitInputFos() {
    if (
      errorInputFos.errorTimeHomeAddress === "error" ||
      errorInputFos.errorDateHomeAddress === "error" ||
      errorInputFos.errorTimeCurrentAddress === "error" ||
      errorInputFos.errorDateCurrentAddress === "error" ||
      errorInputFos.errorTimeWorkAddress === "error" ||
      errorInputFos.errorDateWorkAddress === "error" ||
      errorInputFos.errorTimeSecoundAddress === "error" ||
      errorInputFos.errorDateSecoundAddress === "error"
    ) {
      return true;
    }
    return false;
  }

  function go_to_sales_buddy_homepage() {
    setLocalStorage("Sales_Buddy_Details_Confirm");
    window.location.href = "/sales-buddy";
  }

  function navigate_sales_buddy() {
    window.location.href = "/sales-buddy";
  }

  function navigate_register(ctx) {
    setTimeout(() => {
      window.location.href = `/register/${ctx.data.task_id}/details`;
    }, 1500);
  }

  function replaceTitleCarSection() {
    let index = 1;
    let tables = document
      ?.getElementsByClassName("tilteCarSection")[0]
      ?.querySelectorAll("p");
    tables?.forEach((item) => {
      if (item.innerText.includes("ข้อมูลรถคันที่ 1")) {
        item.innerText = `ข้อมูลรถคันที่ ${index}`;
        index += 1;
      }
    });
  }

  async function isNoData(data) {
    return data && data.length > 0;
  }

  function vehicle_filter(ctx) {
    const form = ctx.data?.search;
    console.log("redbook_filter:", ctx);
    console.log("form : ", form);
    const filters = [
      get_filter(form.brand_code, "and", "brand_code", "eq"),
      get_filter(form.model_code, "and", "model_code", "eq"),
      get_filter(form.cckwh, "and", "cckwh", "eq"),
      get_filter(form.engine_type, "and", "engine_type", "eq"),
      get_filter(form.sub_model_code, "and", "sub_model_code", "eq"),
    ].filter(Boolean);

    console.log("filters : ", filters);
    return {
      payload: {
        data: {
          ["redbook_grid"]: {
            filters,
            pagination: {
              pageIndex: 0,
            },
          },
        },
      },
    };
  }

  function registerBorrowerAgeListener(data) {
    if (!data) return;
    const ages =
      data.birthDate || data.dob
        ? dateToAgeYearAndMonth(data.birthDate || data.dob)
        : "-";
    const now = new Date();
    const options = {
      timeZone: "Asia/Bangkok",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    const dateTimeInThai = new Intl.DateTimeFormat("en-GB", options).format(
      now
    );
    const [day, month, year, hour, minute, second] =
      dateTimeInThai.match(/\d+/g);
    const currentThaiDate = isoToThaiDate(`${year}-${month}-${day}`);
    return {
      ...data,
      ages,
      currentThaiDate,
    };
  }

  function productGroupIndex(_, formData) {
    const productGroup = formData?._rowData?.productGroup;
    const dataSet = formData?.product_group_enum;

    if (!productGroup || !Array.isArray(dataSet)) {
      return "";
    }

    return dataSet.findIndex((el) => el.value === productGroup);
  }

  function productTypeIndex(_, formData) {
    const productGroup = formData?._rowData?.productGroup;
    const type = formData?._rowData?.productType;
    const dataSet = formData?.product_group_enum;

    if (!productGroup || !Array.isArray(dataSet)) {
      return "";
    }
    const productGroupObject = dataSet.find((el) => el.value === productGroup);

    if (!Array.isArray(productGroupObject?.types)) {
      return "";
    }

    return productGroupObject.types.findIndex((el) => el.value === type);
  }

  function checkListDetailsAddProduct(ctx) {
    const credits = ctx.data.credits || [];
    const nextNumber = credits.length + 1;
    return {
      payload: {
        data: {
          credits: [...credits, { number: nextNumber }],
        },
      },
    };
  }

  function dealerSelectList(data) {
    if (!data) return;
    dealerList = data ? data : dealerList;

    return data.map((code) => ({
      value: code.value,
      label: code.label,
    }));
  }

  function mappingDealerCode(code) {
    if (dealerList.length == 0) return;
    if (code) {
      let dealer = dealerList.find((item) => item.value === code);
      return {
        dealer_code: dealer.value,
        dealer_name: dealer.dealerName,
        dealer_group: dealer.dealerGroup,
        dealer_type: dealer.dealer_type,
      };
    } else {
      return {
        dealer_code: "",
        dealer_name: "",
        dealer_group: "",
        dealer_type: "",
      };
    }
  }

  function calculationPrincipal(data) {
    if (data.down_payment && data.total_principal_amount) {
      let calculationResult = data.down_payment - data.total_principal_amount;
      return {
        installment_pay_type: data.installment_pay_type,
        no_of_prepaid_installment: data.no_of_prepaid_installment,
        down_payment: data.down_payment,
        is_vat: data.is_vat,
        vat_percent: data.vat_percent,
        total_principal_amount: data.total_principal_amount,
        principal_amount: calculationResult,
        interest_rate: data.interest_rate,
        interest_rate_type: data.interest_rate_type,
        no_of_installment: data.no_of_installment,
        normal_installment: data.normal_installment,
        selling_price: data.selling_price,
        redbook_price: data.redbook_price,
        deposit_amount: data.deposit_amount,
      };
    } else {
      return data;
    }
  }

  function calculationNormalInstallment(data) {
    if (
      data.principal_amount &&
      data.interest_rate &&
      data.interest_rate_type &&
      data.no_of_installment
    ) {
      let calculationResult;

      // Field 'ยอดจัด'
      let principalAmount = data.principal_amount;
      // Field 'ระยะเวลาที่ผ่อนชำระ(เดือน)'
      let noOfInstallment = data.no_of_installment;
      // Field ‘VAT %’
      let VATRate = data.vat_percent / 100;
      // Field ‘อัตราดอกเบี้ย' ค่ารวมทั้ง 2 type
      let effectiveRate = data.interest_rate;
      //Field ยอดจัด' * (ระยะเวลาที่ผ่อนชำระ(เดือน)/12) * ‘อัตราดอกเบี้ย'/100
      let originInterestAmount =
        principalAmount * (noOfInstallment / 12) * effectiveRate;

      // if (data.interest_rate_type === "FlatRate") {
      //   if (data.is_vat) {
      //     calculationResult = ROUNDUP(
      //       (principalAmount + originInterestAmount) / noOfInstallment
      //     );
      //   } else {
      //     calculationResult = ROUNDUP(
      //       (principalAmount + originInterestAmount) / noOfInstallment + VATRate
      //     );
      //   }
      // } else {
      //   if (data.installment_pay_type === "BeginofMonth") {
      //     if (data.is_vat) {
      //       calculationResult = ROUNDUP(
      //         PMT(
      //           effectiveRate / 12,
      //           noOfInstallment,
      //           -1 * principalAmount,
      //           0,
      //           1
      //         )
      //       );
      //     } else {
      //       calculationResult = ROUNDUP(
      //         PMT(
      //           effectiveRate / 12,
      //           noOfInstallment,
      //           -1 * principalAmount,
      //           0,
      //           1
      //         ) + VATRate
      //       );
      //     }
      //   } else {
      //     if (data.is_vat) {
      //       calculationResult = ROUNDUP(
      //         PMT(effectiveRate / 12, noOfInstallment, -1 * principalAmount)
      //       );
      //     } else {
      //       calculationResult = ROUNDUP(
      //         PMT(effectiveRate / 12, noOfInstallment, -1 * principalAmount) +
      //           VATRate
      //       );
      //     }
      //   }
      // }

      return {
        installment_pay_type: data.installment_pay_type,
        no_of_prepaid_installment: data.no_of_prepaid_installment,
        down_payment: data.down_payment,
        is_vat: data.is_vat,
        vat_percent: data.vat_percent,
        total_principal_amount: data.total_principal_amount,
        principal_amount: data.principal_amount,
        interest_rate: data.interest_rate,
        interest_rate_type: data.interest_rate_type,
        no_of_installment: data.no_of_installment,
        normal_installment: calculationResult,
        selling_price: data.selling_price,
        redbook_price: data.redbook_price,
        deposit_amount: data.deposit_amount,
      };
    } else {
      return data;
    }
  }

  window.currentCount = 0;
  window.vehicles = [];
  function vehicleNoFunction(ctx) {
    console.log("vehicleNoFunction ", ctx);
    if (ctx.data.input_number_of_car.seq !== window.currentCount) {
      window.vehicles = ctx.data.vehicles || [];
      window.currentCount = ctx.data.input_number_of_car.seq;
      let vehicleList = [];
      for (let i = 0; i < +ctx.data.input_number_of_car.seq; i++) {
        if (window.vehicles[i]) {
          vehicleList.push(window.vehicles[i]);
        } else {
          vehicleList.push({
            index: i,
          });
        }
      }

      return {
        payload: {
          data: {
            vehicles: vehicleList,
          },
        },
      };
    } else {
      return {
        payload: {
          data: {
            vehicles: ctx.data.vehicles,
          },
        },
      };
    }
  }

  function register_add_accessories(ctx) {
    console.log("register_add_accessories", JSON.stringify(ctx, 0, 2));
    let selectedIndex = ctx.data.selectIndex;
    let vehicles = cloneObject(ctx.data.vehicles);
    vehicles[selectedIndex].vehicle.car_accessories = vehicles[selectedIndex]
      .vehicle.car_accessories
      ? [
          ...vehicles[selectedIndex].vehicle.car_accessories,
          {
            accessories_seq:
              vehicles[selectedIndex].vehicle.car_accessories?.length + 1,
            accessories_code: null,
            amount: null,
          },
        ]
      : [
          {
            accessories_seq: 1,
            accessories_code: null,
            amount: null,
          },
        ];

    console.log({
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    });

    return {
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    };
  }

  function register_add_payment_specific_plan(ctx) {
    let selectedIndex = ctx.data.selectIndex;
    let vehicles = cloneObject(ctx.data.vehicles);

    vehicles[selectedIndex].repayment_plan.account_payment_step = vehicles[
      selectedIndex
    ].repayment_plan.account_payment_step
      ? [
          ...vehicles[selectedIndex].repayment_plan.account_payment_step,
          {
            start_installment_no:
              vehicles[selectedIndex].repayment_plan?.account_payment_step
                ?.length + 1,
            end_installment_no: "",
            amount: "",
          },
        ]
      : [
          {
            start_installment_no: 1,
            end_installment_no: "",
            amount: "",
          },
        ];

    console.log({
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    });

    return {
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    };
  }

  function setInitValue(ctx) {
    let life_insurance = ctx.data.life_insurance
      ? { ...ctx.data.life_insurance }
      : {};
    life_insurance = Object.assign({
      the_insured_type: "00",
      the_insured_name: "",
      insurance_company_name: "",
      insurance_type: "",
      insurance_plan: "",
      insurance_application_id: "",
      insurance_duration: "",
      sum_insured: "",
      premium_amount: "",
      data_entry_date: life_insurance.data_entry_date
        ? life_insurance.data_entry_date
        : "",
      ins_payment_method: life_insurance.ins_payment_method
        ? life_insurance.ins_payment_method
        : "",
      payment_channel: life_insurance.payment_channel
        ? life_insurance.payment_channel
        : "",
      agent_code: life_insurance.agent_code ? life_insurance.agent_code : "",
      isAutoCalculation: false,
      insurance_type_code: {
        insurance_plan_code: "",
        insurance_duration_code: "",
      },
    });

    return {
      payload: {
        data: {
          life_insurance,
        },
      },
    };
  }

  function register_add_life_insurances(ctx) {
    let selectedIndex = ctx.data.selectIndex;
    let vehicles = cloneObject(ctx.data.vehicles);
    let current_life_insurance = cloneObject(ctx.data.life_insurance);

    vehicles[selectedIndex].insurance_details = vehicles[selectedIndex]
      .insurance_details
      ? [
          ...vehicles[selectedIndex].insurance_details,
          {
            generate_seq: vehicles[selectedIndex].insurance_details?.length + 1,
            the_insured_type: current_life_insurance.the_insured_type,
            the_insured_name: current_life_insurance.the_insured_name,
            insurance_company_name:
              current_life_insurance.insurance_company_name,
            insurance_type: current_life_insurance.insurance_type,
            insurance_plan: current_life_insurance.insurance_plan,
            insurance_application_id:
              current_life_insurance.insurance_application_id,
            insurance_duration: current_life_insurance.insurance_duration,
            sum_insured: current_life_insurance.sum_insured,
            premium_amount: current_life_insurance.premium_amount,
            data_entry_date: current_life_insurance.data_entry_date,
            ins_payment_method: current_life_insurance.ins_payment_method,
            payment_channel: current_life_insurance.payment_channel,
            agent_name: current_life_insurance.agent_code,
          },
        ]
      : [
          {
            generate_seq: 1,
            the_insured_type: current_life_insurance.the_insured_type,
            the_insured_name: current_life_insurance.the_insured_name,
            insurance_company_name:
              current_life_insurance.insurance_company_name,
            insurance_type: current_life_insurance.insurance_type,
            insurance_plan: current_life_insurance.insurance_plan,
            insurance_application_id:
              current_life_insurance.insurance_application_id,
            insurance_duration: current_life_insurance.insurance_duration,
            sum_insured: current_life_insurance.sum_insured,
            premium_amount: current_life_insurance.premium_amount,
            data_entry_date: current_life_insurance.data_entry_date,
            ins_payment_method: current_life_insurance.ins_payment_method,
            payment_channel: current_life_insurance.payment_channel,
            agent_name: current_life_insurance.agent_code,
          },
        ];

    console.log({
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    });

    return {
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    };
  }

  function register_add_invoice(ctx) {
    let selectedIndex = ctx.data.selectIndex;
    let vehicles = cloneObject(ctx.data.vehicles);

    vehicles[selectedIndex].payment_details =
      { ...vehicles[selectedIndex].payment_details } || {};

    vehicles[selectedIndex].payment_details.receipt = vehicles[selectedIndex]
      .payment_details.receipt
      ? [
          ...vehicles[selectedIndex].payment_details.receipt,
          {
            invoice_seq:
              vehicles[selectedIndex].payment_details?.receipt?.length + 1,
            invoice: null,
            invoice_or_loan_amount: null,
            amount: null,
          },
        ]
      : [
          {
            invoice_seq: 1,
            invoice: null,
            invoice_or_loan_amount: null,
            amount: null,
          },
        ];

    console.log({
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    });

    return {
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    };
  }

  function register_add_payment_receiving_account(ctx) {
    let selectedIndex = ctx.data.selectIndex;
    let vehicles = cloneObject(ctx.data.vehicles);

    vehicles[selectedIndex].payment_details =
      { ...vehicles[selectedIndex].payment_details } || {};

    vehicles[selectedIndex].payment_details.receiving_account = vehicles[
      selectedIndex
    ].payment_details.receiving_account
      ? [
          ...vehicles[selectedIndex].payment_details.receiving_account,
          {
            id:
              vehicles[selectedIndex].payment_details?.receiving_account
                ?.length + 1,
            payment_item: null,
            payment_com_Fin: null,
            payment_com_fin_installment: null,
            pay_to: "",
            amount_include_vat: null,
            amount_exclude_vat: null,
            payee_code: null,
          },
        ]
      : [
          {
            id: 1,
            payment_item: null,
            payment_com_Fin: null,
            payment_com_fin_installment: null,
            pay_to: "",
            amount_include_vat: null,
            amount_exclude_vat: null,
            payee_code: null,
          },
        ];

    console.log({
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    });

    return {
      payload: {
        data: {
          vehicles: vehicles,
        },
      },
    };
  }

  function checkListDetailsGetProduct(ctx) {
    return {
      payload: {
        data: {
          credit: ctx.additionalData,
        },
      },
    };
  }

  function checkListDetailsDeleteProduct(ctx) {
    const { credit, credits } = ctx.data;
    return {
      payload: {
        data: {
          credits: credits
            .filter((row) => credit.number !== row.number)
            .map(({ number, ...data }, i) => ({ number: i + 1, ...data })),
        },
      },
    };
  }

  function show_bbi_section() {
    return {
      payload: {
        data: {
          show_bbi_section: true,
        },
      },
    };
  }

  function addItemInterestDetailInTable(ctx) {
    let appl_account_od_interest_plan =
      ctx?.data?.appl_account_od_interest_plan || [];

    appl_account_od_interest_plan = appl_account_od_interest_plan.map(
      (item, index) => {
        return { ...item, seq: index + 1 };
      }
    );

    appl_account_od_interest_plan = [
      ...appl_account_od_interest_plan,
      {
        seq: appl_account_od_interest_plan.length + 1,
        amount: null,
        interest_rate: "",
        interest_spread: "",
        interest_spread_amount: null,
      },
    ];

    return {
      payload: {
        data: {
          appl_account_od_interest_plan,
        },
      },
    };
  }

  function removeItemInterestDetailInTable(ctx) {
    let additionalData = ctx?.additionalData;
    let result = [...(ctx.data.appl_account_od_interest_plan || [])].filter(
      (i) => i.seq !== additionalData.seq
    );

    const updatedArray = result.map((item, index) => ({
      ...item,
      seq: index + 1,
    }));

    return {
      payload: {
        data: {
          appl_account_od_interest_plan: updatedArray,
        },
      },
    };
  }

  function add_repay(ctx) {
    let repayList = ctx?.data?.repayList || [];
    let repayType = ctx?.data?.repayType || {};
    let item = ctx?.data?.repayType;
    item = {
      ...item,
      sublimit_type_desc: "All",
      calculate_amount: thousandSeparatorWithDecimal(0, 2),
      adjust_amount: thousandSeparatorWithDecimal(repayType.adjust_amount, 2),
      duration_from: thousandSeparatorWithDecimal(repayType.duration_from),
      duration_to: thousandSeparatorWithDecimal(repayType.duration_to),
      buffer_rate: thousandSeparatorWithDecimal(repayType.buffer_rate, 3),
      amount: thousandSeparatorWithDecimal(repayType.amount),
    };

    if (!item.bs_seq) {
      item = {
        ...item,
        bs_seq: repayList.length + 1,
      };
      repayList = [...repayList, item];
    } else {
      const all_list = repayList.filter((doc) => doc.bs_seq != item.bs_seq);
      repayList = [...all_list, item];
    }

    repayList.sort((a, b) => a.bs_seq - b.bs_seq);

    let repayType_temp = {};

    for (let key in repayType) {
      repayType_temp[key] = undefined;
    }

    return {
      payload: {
        data: {
          repayList: repayList,
          repayType: repayType_temp,
        },
      },
    };
  }

  function search_repay() {
    return {
      payload: {
        data: {
          search_repay: true,
        },
      },
    };
  }

  function deletePlan(ctx) {
    const additionalData = ctx?.data?.repayType;
    let result = [...(ctx.data.repayList || [])].filter(
      (i) => i.bs_seq !== additionalData.bs_seq
    );
    const updatedArray = result.map((item, index) => ({
      ...item,
      bs_seq: index + 1,
    }));
    return {
      payload: {
        data: {
          repayList: updatedArray,
        },
      },
    };
  }

  function editPlan(ctx) {
    const additionalData = ctx.additionalData;
    let result = [...(ctx.data.repayList || [])].filter(
      (i) => i.bs_seq == additionalData.bs_seq
    )[0];
    return {
      payload: {
        data: {
          repayType: convertNumericValues(result),
        },
      },
    };
  }

  function clearPlan(ctx) {
    let repayType = ctx?.data?.repayType;
    let repayType_temp = {};
    for (let key in repayType) {
      repayType_temp[key] = undefined;
    }
    return {
      payload: {
        data: {
          repayType: repayType_temp,
        },
      },
    };
  }

  function clearAddtionalService(ctx) {
    let appl_account_additionalservice_new =
      ctx.data.appl_account_additionalservice_new;
    let additional_temp = {};
    for (let key in appl_account_additionalservice_new) {
      additional_temp[key] = undefined;
    }
    return {
      payload: {
        data: {
          appl_account_additionalservice_new: additional_temp,
        },
      },
    };
  }

  function tempAccountFee(ctx) {
    let originalData = ctx.data.appl_account_fee;
    let collected_fee = parseFloat(
      originalData?.collected_fee?.replaceAll(",", "")
    );
    let fee_percent = parseFloat(
      originalData?.fee_percent?.replaceAll(",", "")
    );
    let fee_condition =
      originalData?.fee_condition == null
        ? undefined
        : originalData?.fee_condition;

    if (
      !originalData ||
      originalData?.length == 0 ||
      isNaN(collected_fee) ||
      isNaN(fee_percent)
    ) {
      return {
        payload: {
          data: {
            appl_account_fee_edit: {
              calculated_fee: undefined,
              collected_fee: undefined,
              fee_condition: undefined,
              fee_percent: undefined,
              fee_type_desc: undefined,
              fee_type_id: undefined,
            },
          },
        },
      };
    } else {
      return {
        payload: {
          data: {
            appl_account_fee_edit: {
              ...originalData,
              collected_fee: collected_fee,
              fee_percent: fee_percent,
              calculated_fee: `${collected_fee * fee_percent}`,
              fee_condition: fee_condition,
            },
          },
        },
      };
    }
  }

  function navigate_previous_page() {
    window.history.go(-1);
  }

  function convertNumericValues(obj) {
    const newObj = {};
    for (let key in obj) {
      let value =
        typeof obj[key] !== "string" ? obj[key] : obj[key]?.replaceAll(",", "");
      if (!isNaN(value)) {
        if (Number.isInteger(parseFloat(value))) {
          newObj[key] = parseInt(value); // Convert to integer if possible
        } else {
          newObj[key] = parseFloat(value); // Otherwise, convert to float
        }
      } else {
        newObj[key] = value; // Preserve non-numeric values
      }
    }
    return newObj;
  }

  function selectSubLimit(ctx) {
    const additionalData = ctx.additionalData;
    let result = [...(ctx.data.appl_account_sublimit || [])].filter(
      (i) => i.sublimit_seq == additionalData.sublimit_seq
    )[0];
    return {
      payload: {
        data: {
          appl_account_sublimit_new: convertNumericValues(result),
        },
      },
    };
  }

  function deleteSubLimit(ctx) {
    const additionalData = ctx?.data?.appl_account_sublimit;
    let result = [...(ctx.data.repayList || [])].filter(
      (i) => i.sublimit_seq !== additionalData.sublimit_seq
    );
    const updatedArray = result.map((item, index) => ({
      ...item,
      sublimit_seq: `${index + 1}`,
    }));
    return {
      payload: {
        data: {
          appl_account_sublimit: updatedArray,
        },
      },
    };
  }

  function selectSubLimitAdditionalService(ctx) {
    const additionalData = ctx.additionalData;
    let result = [...(ctx.data.appl_account_additionalservice || [])].filter(
      (i) => i.id == additionalData.id
    )[0];
    let insurance_period = parseInt(
      result.insurance_period?.replaceAll(",", "")
    );
    let premium_amount = parseFloat(result.premium_amount?.replaceAll(",", ""));
    let sum_insured_amount = parseFloat(
      result.sum_insured_amount?.replaceAll(",", "")
    );
    let seq = parseInt(result.seq);

    return {
      payload: {
        data: {
          appl_account_additionalservice_new: {
            ...result,
            insurance_period: insurance_period,
            premium_amount: premium_amount,
            sum_insured_amount: sum_insured_amount,
            seq: seq,
          },
        },
      },
    };
  }

  function editSubLimit(ctx) {
    const additionalData = ctx.additionalData;
    window.location.href = `/register/limit/${additionalData.id}/details/addsublimit/edit`;
  }

  function goToSubLimitDetail(ctx) {
    const data = ctx.data;
    window.location.href = `/register/limit/${data.appl_account_id}/details`;
  }

  function staffProfileList(data) {
    if (!data) return;
    return data.map((staff) => {
      const full_name = `${staff?.staff_title || ""} ${
        staff?.staff_name || ""
      } ${staff?.staff_surname || ""}`;
      return {
        value: staff?.staff_id,
        label: full_name,
      };
    });
  }

  function trigger_edit_or_delete_plan(ctx) {
    const additionalData = ctx.additionalData;
    return {
      payload: {
        data: { ...additionalData },
      },
    };
  }

  function add_amount_tier(ctx) {
    console.log("add_amount_tier");
    const data = ctx.data;
    let amount_tier_list = data.amount_tier_list ?? [];
    if (amount_tier_list?.length > 0) {
      let amount_tier_list_add = data.amount_tier_list.map((item) => ({
        ...item,
      }));
      const last_amount_tier = amount_tier_list?.[amount_tier_list.length - 1];
      const new_amount_tier = {
        from_amount: last_amount_tier.amount + 1,
        amount: "",
        interest_rate_list: [],
        paper_header: `Amount Tier ${amount_tier_list.length + 1}`,
        isDisplayRemoveBTN: true,
      };

      if (amount_tier_list?.length > 1) {
        amount_tier_list_add[
          amount_tier_list.length - 1
        ].isDisplayRemoveBTN = false;
      }

      return {
        payload: {
          data: {
            amount_tier_list: [...amount_tier_list_add, new_amount_tier],
          },
        },
      };
    } else {
      const first_amount_tier = {
        from_amount: data.from_amount,
        amount: data.amount,
        interest_rate_list: data.interest_rate_list ?? [],
        paper_header: `Amount Tier 1`,
        isDisplayRemoveBTN: false,
      };

      const second_amount_tier = {
        from_amount: data.amount + 1,
        amount: "",
        interest_rate_list: [],
        paper_header: `Amount Tier 2`,
        isDisplayRemoveBTN: true,
      };

      return {
        payload: {
          data: {
            ...data,
            amount_tier_list: [first_amount_tier, second_amount_tier],
            is_multi_amount_tier: true,
          },
        },
      };
    }
  }

  function getPlanId(array_list) {
    let length = array_list?.length ?? 0;
    let ra_seq = "1";
    if (length > 0) {
      let lastPlanId = parseInt(array_list[array_list.length - 1].ra_seq, 10);
      ra_seq = String(lastPlanId + 1);
    }
    return ra_seq;
  }

  function register_add_sublimit_update_plan(data_list, ra_seq, interest_rate) {
    let add_plan = { ...interest_rate, ra_seq: ra_seq };
    let update_data_list = data_list.map((af) => {
      if (ra_seq === af.ra_seq) {
        return add_plan;
      } else {
        return af;
      }
    });
    return update_data_list;
  }

  function resetModal() {
    const reset_modal = {
      ra_seq: undefined,
      period_from: undefined,
      period_to: undefined,
      period_unit: undefined,
      tier_type: undefined,
      base_factor_standard: undefined,
      base_factor_interest_rates: undefined,
      diff_code: undefined,
      diff_value: undefined,
      diff_code2: undefined,
      diff_value2: undefined,
    };
    return reset_modal;
  }

  function add_interest_rate_plan(ctx) {
    console.log("add_interest_rate_plan");
    console.log(ctx);
    const data = ctx.data;
    const unit_of_time_enum = data.unit_of_time_enum ?? [];
    let period_unit_desc = undefined;
    if (data.period_unit) {
      period_unit_desc =
        unit_of_time_enum.find((e) => data.period_unit === e.value)?.label ||
        undefined;
    }

    let interest_rate = {
      period_from: data.period_from,
      period_to: data.period_to,
      period_unit: data.period_unit,
      period_unit_desc: period_unit_desc,
      tier_type: data.tier_type,
      base_factor_standard: data.base_factor_standard,
      base_factor_interest_rates: data.base_factor_interest_rates,
      diff_code: data.diff_code,
      diff_value: data.diff_value,
      diff_code2: data.diff_code2,
      diff_value2: data.diff_value2,
    };
    const requiredFields = [
      "period_from",
      "period_to",
      "period_unit",
      "tier_type",
      "base_factor_standard",
      "base_factor_interest_rates",
    ];
    const error = requiredFields.filter((field) => !data[field]);

    let resultError = {
      payload: {
        data: {
          isPlanValid: false,
        },
      },
      validation: {
        field: {},
      },
    };

    if (error.length > 0) {
      error.forEach(
        (e) => (resultError.validation.field[e] = "กรุณาระบุข้อมูลให้ครบถ้วน")
      );
      return resultError;
    }

    if (Number(data.period_from) >= Number(data.period_to)) {
      resultError.validation.field[
        "period_to"
      ] = `ระยะเวลาสิ้นสุดต้องมากกว่า ${data["period_from"]}`;
      return resultError;
    }

    if (data.payback_plan_type == "Afterwards") {
      const afterward_list = data.afterward_list ?? [];
      if (data.ra_seq && data.ra_seq != "") {
        if (data.ra_seq == "1" && data.period_from != "1") {
          resultError.validation.field[
            "period_from"
          ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
          return resultError;
        }
        let updateIndex = afterward_list.findIndex(
          (af) => data.ra_seq === af.ra_seq
        );
        let last_plan = afterward_list[updateIndex - 1];
        if (last_plan && last_plan.period_to >= interest_rate.period_from) {
          resultError.validation.field[
            "period_from"
          ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
          return resultError;
        }
        let add_plan = { ...interest_rate, ra_seq: data.ra_seq };
        let update_afterward_list = afterward_list.map((af) => {
          if (data.ra_seq === af.ra_seq) {
            return add_plan;
          } else {
            return af;
          }
        });
        return {
          payload: {
            data: {
              ...resetModal(),
              isPlanValid: true,
              afterward_list: update_afterward_list,
              amount_tier_list: undefined,
              interest_rate_list: undefined,
              is_multi_amount_tier: false,
            },
          },
        };
      }

      if (afterward_list.length == 0 && data.period_from != 1) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
        return resultError;
      }

      let ra_seq = getPlanId(afterward_list);

      let last_plan = afterward_list[afterward_list.length - 1];
      if (last_plan && last_plan.period_to >= interest_rate.period_from) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
        return resultError;
      }

      let add_plan = { ...interest_rate, ra_seq: ra_seq };
      return {
        payload: {
          data: {
            ...resetModal(),
            isPlanValid: true,
            afterward_list: [...afterward_list, add_plan],
            amount_tier_list: undefined,
            interest_rate_list: undefined,
            is_multi_amount_tier: false,
          },
        },
      };
    }
    if (data.is_multi_amount_tier) {
      let amount_tier_list = data.amount_tier_list ?? [];
      const index = data.selectedIndex;
      let updatedAmountTier = { ...amount_tier_list[index] };

      if (
        (!updatedAmountTier.interest_rate_list ||
          updatedAmountTier.interest_rate_list.length == 0) &&
        data.period_from != "1"
      ) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
        return resultError;
      }

      if (data.ra_seq && data.ra_seq != "") {
        if (data.ra_seq == "1" && data.period_from != "1") {
          resultError.validation.field[
            "period_from"
          ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
          return resultError;
        }

        let updateIndex = updatedAmountTier.interest_rate_list.findIndex(
          (af) => data.ra_seq === af.ra_seq
        );
        let last_plan = updatedAmountTier.interest_rate_list[updateIndex - 1];
        if (
          last_plan?.period_to &&
          last_plan?.period_to >= interest_rate.period_from
        ) {
          resultError.validation.field[
            "period_from"
          ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
          return resultError;
        }

        updatedAmountTier.interest_rate_list =
          register_add_sublimit_update_plan(
            updatedAmountTier.interest_rate_list,
            data.ra_seq,
            interest_rate
          );
        let update_amount_tier_list = amount_tier_list.map((tier, i) =>
          i === index ? updatedAmountTier : tier
        );
        return {
          payload: {
            data: {
              ...resetModal(),
              isPlanValid: true,
              amount_tier_list: update_amount_tier_list,
              afterward_list: undefined,
              interest_rate_list: undefined,
            },
          },
        };
      }

      let ra_seq = getPlanId(updatedAmountTier.interest_rate_list);

      let last_plan =
        updatedAmountTier.interest_rate_list[
          updatedAmountTier.interest_rate_list.length - 1
        ];
      if (last_plan && last_plan.period_to >= interest_rate.period_from) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
        return resultError;
      }

      updatedAmountTier.interest_rate_list =
        updatedAmountTier.interest_rate_list &&
        updatedAmountTier.interest_rate_list?.length === 0
          ? [{ ...interest_rate, ra_seq: "1" }]
          : [
              ...updatedAmountTier.interest_rate_list,
              { ...interest_rate, ra_seq: ra_seq },
            ];

      let update_amount_tier_list = amount_tier_list.map((tier, i) =>
        i === index ? updatedAmountTier : tier
      );

      return {
        payload: {
          data: {
            ...resetModal(),
            isPlanValid: true,
            amount_tier_list: update_amount_tier_list,
            afterward_list: undefined,
            interest_rate_list: undefined,
          },
        },
      };
    }

    let interest_rate_list = data.interest_rate_list ?? [];
    if (interest_rate_list.length == 0 && data.period_from != "1") {
      resultError.validation.field[
        "period_from"
      ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
      return resultError;
    }

    if (data.ra_seq && data.ra_seq != "") {
      if (data.ra_seq == "1" && data.period_from != "1") {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
        return resultError;
      }

      let updateIndex = interest_rate_list.findIndex(
        (af) => data.ra_seq === af.ra_seq
      );
      let last_plan = interest_rate_list[updateIndex - 1];
      if (last_plan && last_plan.period_to >= interest_rate.period_from) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
        return resultError;
      }

      let update_plan = register_add_sublimit_update_plan(
        interest_rate_list,
        data.ra_seq,
        interest_rate
      );
      return {
        payload: {
          data: {
            ...resetModal(),
            isPlanValid: true,
            interest_rate_list: update_plan,
            afterward_list: undefined,
            amount_tier_list: undefined,
            is_multi_amount_tier: false,
          },
        },
      };
    }
    let ra_seq = getPlanId(interest_rate_list);

    let last_plan = interest_rate_list[interest_rate_list.length - 1];
    if (last_plan && last_plan.period_to >= interest_rate.period_from) {
      resultError.validation.field[
        "period_from"
      ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
      return resultError;
    }

    let update_plan =
      interest_rate_list?.length === 0
        ? [{ ...interest_rate, ra_seq: "1" }]
        : [...interest_rate_list, { ...interest_rate, ra_seq: ra_seq }];
    return {
      payload: {
        data: {
          ...resetModal(),
          isPlanValid: true,
          interest_rate_list: update_plan,
          afterward_list: undefined,
          amount_tier_list: undefined,
          is_multi_amount_tier: false,
        },
      },
    };
  }

  function findAndRemove(array, predicate) {
    let index = array.findIndex(predicate);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }

  function deleteInterestRatePlan(ctx) {
    console.log("deleteInterestRatePlan");
    console.log(ctx);
    const data = ctx.data;

    if (data.payback_plan_type == "Afterwards") {
      let afterward_list = [...data.afterward_list];
      findAndRemove(
        afterward_list,
        (element) => element.ra_seq === data.ra_seq
      );
      return {
        payload: {
          data: {
            ...resetModal(),
            afterward_list: afterward_list,
          },
        },
      };
    }
    if (data.is_multi_amount_tier) {
      let amount_tier_list = data.amount_tier_list ?? [];
      const index = data.selectedIndex;
      let updatedAmountTier = { ...amount_tier_list[index] };

      let irl = [...updatedAmountTier.interest_rate_list];
      console.log(data.ra_seq);
      console.log(irl);
      findAndRemove(irl, (element) => element.ra_seq === data.ra_seq);
      updatedAmountTier = { ...updatedAmountTier, interest_rate_list: irl };

      let update_amount_tier_list = amount_tier_list.map((tier, i) =>
        i === index ? updatedAmountTier : tier
      );

      return {
        payload: {
          data: {
            ...resetModal(),
            amount_tier_list: update_amount_tier_list,
            interest_rate_list: [],
          },
        },
      };
    }

    let interest_rate_list = [...data.interest_rate_list];
    findAndRemove(
      interest_rate_list,
      (element) => element.ra_seq === data.ra_seq
    );
    return {
      payload: {
        data: {
          ...resetModal(),
          interest_rate_list: interest_rate_list,
        },
      },
    };
  }

  function deleteAmountTier(ctx) {
    const data = ctx.data;
    const selectIndex = ctx.data.selectedIndex;

    let amount_tier_list = data.amount_tier_list.map((item) => ({ ...item }));
    amount_tier_list.splice(selectIndex, 1);

    if (amount_tier_list.length > 1) {
      amount_tier_list[amount_tier_list.length - 1].isDisplayRemoveBTN = true;
    }
    return {
      payload: {
        data: {
          amount_tier_list: amount_tier_list,
        },
      },
    };
  }

  function goBack() {
    window.history.back();
  }

  function clearSessionInterestPlan() {
    return {
      payload: {
        data: { ...resetModal() },
      },
    };
  }

  function editLoan(ctx) {
    const additionalData = ctx.additionalData;

    window.location.href = `/register/${additionalData.id}/details/${
      additionalData.application_account_id
    }/${additionalData.product_type.toLowerCase()}`;
  }

  function editSublimit(ctx) {
    const additionalData = ctx.additionalData;
    window.location.href = `/register/limit/${additionalData.application_account_id}/details`;
  }

  function removeLGinfo(ctx) {
    let additionalData = ctx?.additionalData;
    let result = [...(ctx.data.appl_account_lg_fee || [])].filter(
      (i) => i.seq !== additionalData.seq
    );
    const updatedArray = result.map((item, index) => ({
      ...item,
      seq: index + 1,
    }));
    return {
      payload: {
        data: {
          appl_account_lg_fee: updatedArray,
        },
      },
    };
  }

  function addLGInfo(ctx) {
    let loanInfoList = ctx?.data?.appl_account_lg_fee || [];

    loanInfoList = loanInfoList.map((item, index) => {
      return { ...item, seq: index + 1 };
    });

    loanInfoList = [
      ...loanInfoList,
      {
        seq: loanInfoList.length + 1,
        fee_amount: undefined,
        fee_percentage: undefined,
      },
    ];

    return {
      payload: {
        data: {
          appl_account_lg_fee: loanInfoList,
        },
      },
    };
  }

  function thousandSeparatorWithDecimal(value, decimalPlaces = 0) {
    if (value === null || value === undefined) {
      return value;
    }
    if (typeof value === "number" || typeof value === "string") {
      let stringValue = String(value);
      if (!isNaN(stringValue)) {
        let numberValue = parseFloat(stringValue);
        let formattedValue = numberValue.toFixed(decimalPlaces);
        let [integerPart, decimalPart] = formattedValue.split(".");
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (decimalPart !== undefined) {
          return `${integerPart}.${decimalPart}`;
        } else {
          return integerPart;
        }
      } else {
        return value;
      }
    } else {
      return value;
    }
  }

  function listener_mortgage_page_appl_account(data) {
    let new_appl_acount = data;
    new_appl_acount = listener_interest_amount_per_month(new_appl_acount);

    if (data?.credit_line_type === "LOAN") {
      new_appl_acount = listener_requested_amount(new_appl_acount);
    }

    return new_appl_acount;
  }

  function listener_requested_amount(data) {
    const requested_amount =
      (data.pri_credit_limit ?? 0) +
      (data.housing_credit_limit ?? 0) +
      (data.final_installment_transfer_limit ?? 0) +
      (data.nl_pot_credit_limit ?? 0) +
      (data.pis_credit_limit ?? 0) +
      (data.pot_credit_limit ?? 0);
    return {
      ...data,
      requested_amount,
    };
  }

  function listener_interest_amount_per_month(data) {
    let account_interest_monthly_amount = 0;

    if (data.requested_amount && data.account_interest_monthly) {
      account_interest_monthly_amount =
        (data.requested_amount * (data.account_interest_monthly / 100)) / 12;
    }

    return {
      ...data,
      account_interest_monthly_amount: account_interest_monthly_amount,
      account_interest_monthly_amount_str: thousandSeparatorWithDecimal(
        account_interest_monthly_amount
      ),
    };
  }

  function filterFOSStatus(data, party) {
    if (!data || !party) return null;

    const fosArr = party.appl_party_rcverify[0]?.appl_party_rcverify_fos;

    if (!fosArr) return null;

    return (
      fosArr.find((fos) => fos?.address_usage === data?.address_usage)
        ?.fos_status || null
    );
  }

  function filterFOSInterfaceStatus(data, party) {
    if (!data || !party) return null;

    const fosArr = party.appl_party_rcverify[0]?.appl_party_rcverify_fos;

    if (!fosArr) return null;

    return (
      fosArr.find((fos) => fos?.address_usage === data?.address_usage)
        ?.fos_interface_status || null
    );
  }

  function go_to_fos_homepage() {
    setTimeout(navigate_fos, 1500);
  }

  function navigate_fos() {
    window.location.href = "/fos";
  }

  function toggleSendToFosStatus(context) {
    return {
      payload: {
        data: {
          sendToFosStatus: !context.data.sendToFosStatus,
        },
      },
    };
  }

  function isThaiIdValid(thaiId) {
    const idParts = thaiId.match(/^(\d{12})(\d)$/);

    const digits = idParts[1].split("");
    const sum = digits.reduce(
      (total, digit, i) => total + (13 - i) * +digit,
      0
    );

    const lastDigitCalc = `${(11 - (sum % 11)) % 10}`;
    const lastDigitInput = idParts[2];

    return lastDigitCalc === lastDigitInput;
  }

  function validateReferenceDocumentNo(ctx) {
    const borrowersToCheck = ctx.data.borrowersInformation.filter(
      (borrower) => borrower.repeatNcbCheck
    );

    const isMatch = borrowersToCheck.every(
      (borrower) =>
        borrower.referenceDocumentNoIndividual === borrower.referenceDocumentNo
    );

    const isEveryNoValid = borrowersToCheck.every((borrower) =>
      isThaiIdValid(borrower.referenceDocumentNoIndividual)
    );

    const result =
      isMatch && isEveryNoValid
        ? {}
        : {
            data: {
              error: "Incorrect Document No(s)",
            },
          };

    return result;
  }

  function getIncorrectDocumentNoError(ctx) {
    const errors = {};

    ctx.data.borrowersInformation
      .filter((borrower) => borrower.repeatNcbCheck)
      .forEach((borrower, index) => {
        const isNotMatch =
          borrower.referenceDocumentNoIndividual !==
          borrower.referenceDocumentNo;
        const isNotValid = !isThaiIdValid(
          borrower.referenceDocumentNoIndividual
        );

        if (isNotMatch || isNotValid) {
          errors[
            `borrowersInformation.${index}.referenceDocumentNoIndividual`
          ] = "กรุณากรอกข้อมูลให้ถูกต้อง";
        }
      });

    return {
      validation: {
        field: {
          ...errors,
        },
      },
    };
  }

  function check_work_basket_search_criteria_fu(ctx) {
    return check_search_criteria(ctx, searchFU);
  }

  function clear_work_basket_search_fu(ctx) {
    return clear_search(ctx, searchFU, workbasketGridFU);
  }

  function work_basket_filter_fu(ctx) {
    return grid_filter(ctx.data?.search_fu, workbasketGridFU);
  }

  function getDuplicateRowIndexes(srcArray, key) {
    return srcArray
      .map((x) => x[key])
      .map((x, i, a) => (a.indexOf(x) === i ? 0 : i))
      .filter((x) => x);
  }

  function validateEditBorrowerOrder(payload) {
    const result = {
      isValid: true,
      errors: {},
    };

    const duplicateOrderIndexes = getDuplicateRowIndexes(
      payload.data.orderBorrowers,
      "number"
    );

    if (duplicateOrderIndexes.length) {
      result.isValid = false;
      duplicateOrderIndexes.forEach((i) => {
        result.errors[`orderBorrowers.${i}.number`] = "duplicate"; // please provide unique order number";
      });
    }

    payload.data.orderBorrowers.forEach((b, i) => {
      if (!b.number && !result.errors[`orderBorrowers.${i}.number`]) {
        result.isValid = false;
        result.errors[`orderBorrowers.${i}.number`] =
          "please provide borrower order";
      }
      if (b.number === 1 && b.relationship) {
        result.isValid = false;
        result.errors[`orderBorrowers.${i}.relationship`] = "self reference"; // please provide empty value for main borrower";
      }
      if (b.number !== 1 && !b.relationship) {
        result.isValid = false;
        result.errors[`orderBorrowers.${i}.relationship`] =
          "please provide relationship to main borrower";
      }
    });

    return result;
  }

  function checkForValidationErrorEditBorrowerOrder(payload) {
    const validationResult = validateEditBorrowerOrder(payload);
    if (!validationResult.isValid) {
      return {
        data: {
          error: "validation failed",
        },
      };
    } else {
      return {};
    }
  }

  function getValidationResponseEditBorrowerOrder(payload) {
    const result = {
      validation: {},
    };

    const validationResult = validateEditBorrowerOrder(payload);

    if (validationResult.errors.hasOwnProperty("__form")) {
      result.validation.form = validationResult.errors.__form;
      delete validationResult.errors.__form;
    }

    if (Object.keys(validationResult.errors).length) {
      result.validation.field = { ...validationResult.errors };
    }

    return result;
  }

  function passBorrowersToEditOrder(payload) {
    const result = {
      payload: {
        data: {
          borrowers: payload.data.borrowers.map((x) => ({
            ...x,
            oldNumber: x.number,
          })),
        },
      },
    };
    return result;
  }

  function passPayloadNoTransform(payload) {
    return { payload };
  }

  function returnOrderedBorrowers(payload) {
    const result = {
      payload: {
        data: {
          borrowers: [...payload.data.orderBorrowers].sort(
            (a, b) => a.number - b.number
          ),
        },
      },
    };
    return result;
  }

  function resetRelationshipEditBorrowerOrder(payload) {
    let reset = false;

    for (const x of payload) {
      if (x.number !== x.oldNumber) {
        if (
          (x.number === 1 && x.oldNumber !== 1) ||
          (x.number !== 1 && x.oldNumber === 1)
        ) {
          reset = true;
        }
        x.oldNumber = x.number;
      }
    }

    return reset ? payload.map((x) => ({ ...x, relationship: null })) : payload;
  }

  function validateCurrentData(context) {
    if (currentChangeDate === "") {
      currentChangeDate = context;
    } else if (currentChangeDate !== context) {
      currentChangeDate = context;
      isNotCurrentData = true;
    }
    return context;
  }

  function selectEffectiveDate(context) {
    const button = document.getElementById("hiddenRefreshButton");
    if (isNotCurrentData) {
      button.click();
      isNotCurrentData = false;
    }
    return { code: 1000 };
  }

  function validateAgingStatus(context) {
    return context.code;
  }

  function convertNumber(context) {
    if (typeof context === "number" || !isNaN(Number(context))) {
      const formattedNumber = Number(context).toFixed(2);
      return formattedNumber;
    }
  }

  function mapAgingPayload(context) {
    initialAgingCount = 0;
    currentChangeDate = "";
    return {
      payload: {
        data: {
          accountNumber: context.additionalData.account_number
            ? context.additionalData.account_number
            : "-",
          effectiveDate: undefined,
          date: undefined,
          numberPeriodUnpaid: undefined,
          amountUnpaid: undefined,
          outstandingBalance: undefined,
          availableBalance: undefined,
          grade: undefined,
          pri: undefined,
          pis: undefined,
          pot: undefined,
        },
      },
    };
  }
  // From Original Doc Station
  function customer_name_multi_converter(data) {
    if (!data) return "";

    let fullName = "";
    for (var borrower of data) {
      try {
        if (!borrower.party.full_name) throw false;
        fullName !== ""
          ? (fullName += `\n` + borrower?.party?.full_name)
          : (fullName += borrower?.party?.full_name);
      } catch {
        fullName !== "" ? (fullName += "") : (fullName = "");
      }
    }
    return fullName;
  }

  function account_number_converter(data) {
    if (!data) return "";

    let accountNo = "";
    for (var account of data) {
      try {
        if (!account.account_number) throw false;
        accountNo !== ""
          ? (accountNo += ", " + account?.account_number)
          : (accountNo += account?.account_number);
      } catch {
        accountNo !== "" ? (accountNo += "") : (accountNo = "");
      }
    }
    return accountNo;
  }

  function product_type_converter(data) {
    if (!data) return "";

    let productType = "";
    for (var account of data) {
      try {
        if (!account.product_type.description) throw false;
        productType !== ""
          ? (productType += ", " + account?.product_type?.description)
          : (productType += account?.product_type?.description);
      } catch {
        productType !== "" ? (productType += "") : (productType = "");
      }
    }
    return productType;
  }

  function sub_product_converter(data) {
    if (!data) return "";

    let subProduct = "";
    for (var account of data) {
      try {
        if (!account.sub_product.description) throw false;
        subProduct !== ""
          ? (subProduct += ", " + account?.sub_product?.description)
          : (subProduct += account?.sub_product?.description);
      } catch {
        subProduct !== "" ? (subProduct += "") : (subProduct = "");
      }
    }
    return subProduct;
  }

  function license_plate_converter(data) {
    if (!data) return "";

    let licensePlate = "";
    for (var account of data) {
      for (var collateral of account.account_collaterals) {
        for (var auto of collateral.autos) {
          try {
            if (!auto.license_plate) throw false;
            licensePlate !== ""
              ? (licensePlate += ", " + auto?.license_plate)
              : (licensePlate += auto?.license_plate);
          } catch {
            licensePlate !== "" ? (licensePlate += "") : (licensePlate = "");
          }
        }
      }
    }
    return licensePlate;
  }

  function province_converter(data) {
    if (!data) return "";

    let province = "";
    for (var account of data) {
      for (var collateral of account.account_collaterals) {
        for (var auto of collateral.autos) {
          try {
            if (!auto.province) throw false;
            province !== ""
              ? (province += ", " + auto?.province)
              : (province += auto?.province);
          } catch {
            province !== "" ? (province += "") : (province = "");
          }
        }
      }
    }
    return province;
  }

  function account_settlement_date_converter(data) {
    if (!data) return "";

    let date = "";
    for (var account of data) {
      try {
        if (!account.account_settlement_date) throw false;
        date !== ""
          ? (date +=
              ", " + date_column_converter(account.account_settlement_date))
          : (date += date_column_converter(account.account_settlement_date));
      } catch {
        date !== "" ? (date += "") : (date = "");
      }
    }
    return date;
  }

  function isActiveCell(data) {
    return data === "true" || data === true ? "Active" : "Inactive";
  }

  function unit_converter(data) {
    if (!data) return "";

    let unit = "";
    for (var account of data) {
      try {
        if (!account.unit) throw false;
        unit !== "" ? (unit += ", " + account?.unit) : (unit += account?.unit);
      } catch {
        unit !== "" ? (unit += "") : (unit = "");
      }
    }
    return unit;
  }

  function addChecklistDocumnet(context) {
    const indexDoclist = context.data.selectedIndex;
    let tempChecklist = {};
    let checklistDoc = [
      ...(context.data.originalDocList[indexDoclist].originalDocCheckList ||
        []),
    ];
    tempChecklist.seq = checklistDoc.length + 1;
    checklistDoc.push(tempChecklist);

    let updatedDocListsNew = context.data.originalDocList.map((doc, index) => {
      if (index === indexDoclist) {
        return { ...doc, originalDocCheckList: checklistDoc };
      } else {
        return doc;
      }
    });

    console.log(updatedDocListsNew);

    console.log("success");

    return {
      payload: {
        data: {
          originalDocList: updatedDocListsNew,
        },
      },
    };
  }

  function refresh_data_grid(ctx) {
    location.reload();
    return {};
  }

  function guarantee_number_converter(data) {
    if (!data) return "";

    let number = 0;
    try {
      for (var borrower of data) {
        for (var guarantee of borrower?.party?.appl_guarantees) {
          if (!guarantee.party_type_id) throw false;
          if (guarantee.party_type_id == "03") number += 1;
        }
      }
    } catch {
      number = " 0 ";
    }
    return number == 0 ? " 0 " : number.toString();
  }

  function originaldoc_storage_serial_no_generator(ctx, data) {
    console.log("originaldoc_storage_serial_no_generator", ctx, data);
    window.OriginalDocStorageSerialNo++;
    return window.OriginalDocStorageSerialNo;
  }

  function originaldoc_subsrithai_serial_no_generator(ctx, data) {
    console.log("originaldoc_subsrithai_serial_no_generator");
    window.OriginalDocSubSriThaiSerialNo++;
    return window.OriginalDocSubSriThaiSerialNo;
  }

  function resetSerialNo() {
    console.log("resetSerialNo!");
    window.OriginalDocStorageSerialNo = 0;
    window.OriginalDocSubSriThaiSerialNo = 0;
    console.log("After Reset!");
  }

  function reset_notification() {
    return {
      payload: {
        data: {
          previous_user: {
            code: 1,
          },
        },
      },
    };
  }

  function ci_workbasket_filter(ctx) {
    const form = ctx.data?.search_WB;
    let res = set_search_payload_ci("form_invalid", []);
    if (!form) {
      return res;
    }

    const docInDateTimeRange = getDateFromDateTo(form.doc_in_datetime);
    const docInOneDateTime = getDateFromDateTo(form.doc_in_one_datetime);
    const registrationDate = getDateFromDateTo(form.registration_date);
    const filters = [
      get_filter(form.application_number, "and", "application_id", "contains"),
      get_filter(form.op_number, "and", "op.op_number", "contains"),
      get_filter(
        form.customer_firstname,
        "and",
        "application.appl_parties.name",
        form.exact_match ? "eq" : "contains"
      ),
      get_filter(
        form.customer_lastname,
        "and",
        "application.appl_parties.last_name",
        form.exact_match ? "eq" : "contains"
      ),
      get_filter(
        form.document_type,
        "and",
        "primary_document.document.document_type.code",
        "eq"
      ),
      get_filter(
        form.document_number,
        "and",
        "primary_document.document.document_number",
        "contains"
      ),
    ].filter(Boolean);

    res = set_search_payload_ci(
      filters.length > 0 ? "form_valid" : "form_invalid",
      filters
    );
    return res;
  }

  function ci_worklist_filter(ctx) {
    const form = ctx.data?.search_WL;
    let res = set_search_payload_ci("form_invalid", []);
    if (!form) {
      return res;
    }

    const docInDateTimeRange = getDateFromDateTo(form.doc_in_datetime);
    const docInOneDateTime = getDateFromDateTo(form.doc_in_one_datetime);
    const registrationDate = getDateFromDateTo(form.registration_date);

    const filters = [
      get_filter(form.application_number, "and", "application_id", "contains"),
      get_filter(form.op_number, "and", "op.op_number", "contains"),
      get_filter(
        form.customer_firstname,
        "and",
        "application.appl_parties.name",
        form.exact_match ? "eq" : "contains"
      ),
      get_filter(
        form.customer_lastname,
        "and",
        "application.appl_parties.last_name",
        form.exact_match ? "eq" : "contains"
      ),
      get_filter(
        form.document_type,
        "and",
        "primary_document.document.document_type.code",
        "eq"
      ),
      get_filter(
        form.document_number,
        "and",
        "primary_document.document.document_number",
        "contains"
      ),
    ].filter(Boolean);

    res = set_search_payload_ci(
      filters.length > 0 ? "form_valid" : "form_invalid",
      filters
    );
    return res;
  }

  function reset_notification() {
    return {
      payload: {
        data: {
          previous_user: {
            code: 1,
          },
        },
      },
    };
  }

  function insurance_workbasket_filter(ctx) {
    const form = ctx.data?.search_WB;
    let res = set_search_payload_insurance("form_invalid", []);
    if (!form) {
      return res;
    }
    const from_date = getDateFromDateTo(form.from_date);
    const to_date = getDateFromDateTo(form.to_date);

    const filters = [
      get_filter(form.application_number, "and", "application_id", "contains"),
      get_filter(form.op_number, "and", "op.op_number", "contains"),
      get_filter(form.customer_firstname, "and", "application.appl_parties.name", form.exact_match ? "eq" : "contains"),
      get_filter(form.customer_lastname, "and", "application.appl_parties.last_name", form.exact_match ? "eq" : "contains"),
      get_filter(form.document_type, "and", "primary_document.document.document_type.code", "eq"),
      get_filter(form.document_number, "and", "primary_document.document.document_number", "contains"),
      get_filter(from_date.dateFrom, "and", "application.account.account_settlement_date", "gte"),
      get_filter(to_date.dateTo, "and", "application.accounts.account_settlement_date", "lte"),
    ].filter(Boolean);

    res = set_search_payload_insurance(filters.length > 0 ? "form_valid" : "form_invalid", filters);
    return res;
  }

  function insurance_worklist_filter(ctx) {
    const form = ctx.data?.search_WL;
    let res = set_search_payload_insurance("form_invalid", []);
    if (!form) {
      return res;
    }
    const from_date = getDateFromDateTo(form.from_date);
    const to_date = getDateFromDateTo(form.to_date);

    const filters = [
      get_filter(form.application_number, "and", "application_id", "contains"),
      get_filter(form.op_number, "and", "op.op_number", "contains"),
      get_filter(form.customer_firstname, "and", "application.appl_parties.name", form.exact_match ? "eq" : "contains"),
      get_filter(form.customer_lastname, "and", "application.appl_parties.last_name", form.exact_match ? "eq" : "contains"),
      get_filter(form.document_type, "and", "primary_document.document.document_type.code", "eq"),
      get_filter(form.document_number, "and", "primary_document.document.document_number", "contains"),
      get_filter(from_date.dateFrom, "and", "application.accounts.account_settlement_date", "gte"),
      get_filter(to_date.dateTo, "and", "application.accounts.account_settlement_date", "lte"),
    ].filter(Boolean);

    res = set_search_payload_insurance(filters.length > 0 ? "form_valid" : "form_invalid", filters);
    return res;
  }

  function objectives_converter_ci_insurance(data) {
    if (!data) return "";

    let op_objective_desc = "";

    for (var objective of data) {
      try {
        if (!objective.op_objective_desc) throw false;
        op_objective_desc !== ""
          ? (op_objective_desc += (`\n`) + objective?.op_objective_desc)
          : (op_objective_desc += objective?.op_objective_desc);
      } catch {
        op_objective_desc !== ""
          ? (op_objective_desc += "")
          : (op_objective_desc = "");
      }
    }

    return op_objective_desc;
  }

  function customer_name_converter_ci_insurance(data) {
    if (!data) return "";

    let fullName  = "";

    for (var appparty of data){
      try {
        if(!appparty.full_name) throw false;
        fullName !== "" ? fullName += (`\n`) + appparty?.full_name : fullName += appparty?.full_name;
      } catch {
        fullName !== "" ? fullName += "" : fullName  = "";
      } 
    }

    return fullName;
  }

  function clear_filter_applications_grid_ci_insurance() {
    return {
      payload: {
        data: {
          search: {
            application_number: undefined,
            op_number: undefined,
            customer_firstname: undefined,
            customer_lastname: undefined,
            exact_match: undefined,
            document_type: undefined,
            document_number: undefined,
            from_date: undefined,
            to_date: undefined,
          },
          search_WL: {
            application_number: undefined,
            op_number: undefined,
            customer_firstname: undefined,
            customer_lastname: undefined,
            exact_match: undefined,
            document_type: undefined,
            document_number: undefined,
            from_date: undefined,
            to_date: undefined,
          },
          search_WB: {
            application_number: undefined,
            op_number: undefined,
            customer_firstname: undefined,
            customer_lastname: undefined,
            exact_match: undefined,
            document_type: undefined,
            document_number: undefined,
            from_date: undefined,
            to_date: undefined,
          },
          workbasket_grid: {
            filters: [],
            pagination: {
              pageIndex: 0,
            },
          },
          worklist_grid: {
            filters: [],
            pagination: {
              pageIndex: 0,
            },
          },
        },
      },
    };
  }

  function apprisal_date_converter(data){
    if (!data) return "";

    let date  = "";
    for (var obj of data){
      try {
        if(!obj.apprisal_date) throw false;
        date !== "" ? date += (", ") + date_only_column_converter(obj.apprisal_date) : date += date_only_column_converter(obj.apprisal_date);
      } catch {
        date !== "" ? date += ("") : date  = "";
      } 
    }
    return date;
  }

  function security_type_converter(data) {
    if (!data) return "";

    let security_type  = "";

    for (var obj of data){
      try {
        if(!obj.security_type) throw false;
        security_type !== "" ? security_type += "," + obj?.security_type : security_type += obj?.security_type;
      } catch {
        security_type !== "" ? security_type += "" : security_type  = "";
      } 
    }

    return security_type;
  }

  function date_only_column_converter(data) {
    if (!data) return data;

    try {
      return utils.moment(data).add(543, "year").format("DD/MM/YYYY");
    } catch {
      return data;
    }
  }

  function initialAging(context) {
    if (initialAgingCount === 0) {
      initialAgingCount++;
      const button = document.getElementById("hiddenRefreshButton");
      button.click();
      isNotCurrentData = false;
    }
  }

  function toggle_submit_visibility(data) {
    if (data.status == "Complete" || data.status == "Cancel") {
      return {
        payload: {
          data: {
            status_show_button: true,
          },
        },
      };
    } else {
      return {
        payload: {
          data: {
            status_show_button: true,
          },
        },
      };
    }
  }

  function check_search_criteria_WL(ctx) {
    let searchData = ctx.data?.search_WL || {};
    return {
      payload: {
        data: {
          canSubmit: !!Object.keys(searchData).filter((i) => searchData[i])
            .length,
        },
      },
    };
  }

  function check_search_criteria_WB(ctx) {
    let searchData = ctx.data?.search_WB || {};
    return {
      payload: {
        data: {
          canSubmit: !!Object.keys(searchData).filter((i) => searchData[i])
            .length,
        },
      },
    };
  }

  function openDocumentumLinkfromGrid(data) {
    let widthScreen = window.screen.width / 2;
    let heightScreen = window.screen.height;
    console.log(data);
    window.open(
      "/cidoc/" + data.id + "/details",
      "_blank",
      "top=0,left=0,width=" + widthScreen + ",height=" + heightScreen + ""
    );
  }

  function set_search_payload_ci(status, filters) {
    return {
      payload: {
        data: {
          status,
          error_modal: {
            title: "Filter error",
            text: "Please select one of the filter option",
          },
          workbasket_grid: {
            filters: filters,
          },
          worklist_grid: {
            filters: filters,
          },
        },
      },
    };
  }

  function set_search_payload_insurance(status, filters) {
    return {
      payload: {
        data: {
          status,
          error_modal: {
            title: "Filter error",
            text: "Please select one of the filter option",
          },
          workbasket_grid: {
            filters: filters,
          },
          worklist_grid: {
            filters: filters,
          },
        },
      },
    };
  }
  //Field Verify (FOS) SP#3

  function filterFOSStatus(data, party) {
    if (!data || !party) return null;

    const fosArr = party.appl_party_rcverify[0]?.appl_party_rcverify_fos;

    if (!fosArr) return null;

    return (
      fosArr.find((fos) => fos?.address_usage === data?.address_usage)
        ?.fos_status || null
    );
  }

  function filterFOSInterfaceStatus(data, party) {
    if (!data || !party) return null;

    const fosArr = party.appl_party_rcverify[0]?.appl_party_rcverify_fos;

    if (!fosArr) return null;

    return (
      fosArr.find((fos) => fos?.address_usage === data?.address_usage)
        ?.fos_interface_status || null
    );
  }

  function go_to_fos_homepage() {
    setTimeout(navigate_fos, 1500);
  }

  function navigate_fos() {
    window.location.href = "/fos";
  }

  function toggleSendToFosStatus(context) {
    return {
      payload: {
        data: {
          sendToFosStatus: !context.data.sendToFosStatus,
        },
      },
    };
  }
  function amphurQuery(data) {
    if (!data) return;
    return data.map((item) => ({
      value: item.district_th,
      label: item.district_th,
    }));
  }

  function tambonQuery(data) {
    if (!data) return;
    return data.map((item) => ({
      value: item.sub_district_th,
      label: item.sub_district_th,
    }));
  }

  function zipcodeQuery(data) {
    if (!data) return;
    return data.map((item) => ({
      value: item.zip_code,
      label: item.zip_code,
    }));
  }

  function uuidv4() {
    return "10000000-1000-1000-1000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  }

  function showEditSubLimit(data) {
    return data ? "button" : "buttonDisable";
  }

  function stationListenerRegister(data) {
    if (!data) return;
    const roleUndefined = Object.keys(data).length <= 0;
    if (roleUndefined) return { roleUndefined };

    return {
      ...data.station,
      roleUndefined,
      showNotification: getLocalStorageRegister(),
    };
  }

  function getLocalStorageRegister() {
    if (localStorage.getItem("showNotification")) {
      let dataItem = JSON.parse(localStorage.getItem("showNotification"));
      let diffTime = new Date() - new Date(dataItem.expired);
      if (diffTime > 3000) {
        localStorage.setItem("showNotification", "{}");
      } else {
        let dataItem = JSON.parse(localStorage.getItem("showNotification"));
        if (Object.keys(dataItem).length > 0) {
          // show notification
          console.log(
            JSON.parse(localStorage.getItem("showNotification")).data
          );
          let result = JSON.parse(
            localStorage.getItem("showNotification")
          ).data;
          localStorage.setItem("showNotification", "{}");
          return result;
        }
      }
    } else {
      return "";
    }
  }

  function selectLoan(ctx) {
    const loanToDelete = ctx.additionalData;
    let loans = [...(ctx.data.loanSection.loans || [])].filter(
      (i) => i.seq == loanToDelete.seq
    )[0];

    return {
      payload: {
        data: {
          loans: loans,
          delete_loans: [
            ...(ctx.data.delete_loans || []),
            loans.application_account_id ?? loans.id,
          ],
        },
      },
    };
  }

  function deleteSubLimit(ctx) {
    const additionalData = ctx?.data?.appl_account_sublimit;
    let result = [...(ctx.data.repayList || [])].filter(
      (i) => i.sublimit_seq !== additionalData.sublimit_seq
    );
    const updatedArray = result.map((item, index) => ({
      ...item,
      sublimit_seq: `${index + 1}`,
    }));
    return {
      payload: {
        data: {
          appl_account_sublimit: updatedArray,
        },
      },
    };
  }

  function selectSubLimitAdditionalService(ctx) {
    const additionalData = ctx.additionalData;
    let result = [...(ctx.data.appl_account_additionalservice || [])].filter(
      (i) => i.id == additionalData.id
    )[0];
    let insurance_period = parseInt(
      result.insurance_period?.replaceAll(",", "")
    );
    let premium_amount = parseFloat(result.premium_amount?.replaceAll(",", ""));
    let sum_insured_amount = parseFloat(
      result.sum_insured_amount?.replaceAll(",", "")
    );
    let seq = parseInt(result.seq);

    return {
      payload: {
        data: {
          appl_account_additionalservice_new: {
            ...result,
            insurance_period: insurance_period,
            premium_amount: premium_amount,
            sum_insured_amount: sum_insured_amount,
            seq: seq,
          },
        },
      },
    };
  }

  function editSubLimit(ctx) {
    const additionalData = ctx.additionalData;
    window.location.href = `/register/limit/${additionalData.id}/details/addsublimit/edit`;
  }

  function goToSubLimitDetail(ctx) {
    const data = ctx.data;
    window.location.href = `/register/limit/${data.appl_account_id}/details`;
  }

  function staffProfileList(data) {
    if (!data) return;
    return data.map((staff) => {
      const full_name = `${staff?.staff_title || ""} ${
        staff?.staff_name || ""
      } ${staff?.staff_surname || ""}`;
      return {
        value: staff?.staff_id,
        label: full_name,
      };
    });
  }

  function trigger_edit_or_delete_plan(ctx) {
    const additionalData = ctx.additionalData;
    return {
      payload: {
        data: { ...additionalData },
      },
    };
  }

  function add_amount_tier(ctx) {
    console.log("add_amount_tier");
    const data = ctx.data;
    let amount_tier_list = data.amount_tier_list ?? [];
    if (amount_tier_list?.length > 0) {
      let amount_tier_list_add = data.amount_tier_list.map((item) => ({
        ...item,
      }));
      const last_amount_tier = amount_tier_list?.[amount_tier_list.length - 1];
      const new_amount_tier = {
        from_amount: last_amount_tier.amount + 1,
        amount: "",
        interest_rate_list: [],
        paper_header: `Amount Tier ${amount_tier_list.length + 1}`,
        isDisplayRemoveBTN: true,
      };

      if (amount_tier_list?.length > 1) {
        amount_tier_list_add[
          amount_tier_list.length - 1
        ].isDisplayRemoveBTN = false;
      }

      return {
        payload: {
          data: {
            amount_tier_list: [...amount_tier_list_add, new_amount_tier],
          },
        },
      };
    } else {
      const first_amount_tier = {
        from_amount: data.from_amount,
        amount: data.amount,
        interest_rate_list: data.interest_rate_list ?? [],
        paper_header: `Amount Tier 1`,
        isDisplayRemoveBTN: false,
      };

      const second_amount_tier = {
        from_amount: data.amount + 1,
        amount: "",
        interest_rate_list: [],
        paper_header: `Amount Tier 2`,
        isDisplayRemoveBTN: true,
      };

      return {
        payload: {
          data: {
            ...data,
            amount_tier_list: [first_amount_tier, second_amount_tier],
            is_multi_amount_tier: true,
          },
        },
      };
    }
  }

  function getPlanId(array_list) {
    let length = array_list?.length ?? 0;
    let ra_seq = "1";
    if (length > 0) {
      let lastPlanId = parseInt(array_list[array_list.length - 1].ra_seq, 10);
      ra_seq = String(lastPlanId + 1);
    }
    return ra_seq;
  }

  function register_add_sublimit_update_plan(data_list, ra_seq, interest_rate) {
    let add_plan = { ...interest_rate, ra_seq: ra_seq };
    let update_data_list = data_list.map((af) => {
      if (ra_seq === af.ra_seq) {
        return add_plan;
      } else {
        return af;
      }
    });
    return update_data_list;
  }

  function resetModal() {
    const reset_modal = {
      ra_seq: undefined,
      period_from: undefined,
      period_to: undefined,
      period_unit: undefined,
      tier_type: undefined,
      base_factor_standard: undefined,
      base_factor_interest_rates: undefined,
      diff_code: undefined,
      diff_value: undefined,
      diff_code2: undefined,
      diff_value2: undefined,
    };
    return reset_modal;
  }

  function intervalFromDateInYears(data) {
    const result = {};
    const currentDate = utils.moment();
    if (Boolean(data?.startDateOfFirstEmployment)) {
      const startDate = utils.moment(data?.startDateOfFirstEmployment);
      result.yearsOfEmployment = currentDate.diff(startDate, 'years', false);
    }
    if (Boolean(data?.startDateOfCurrentEmployment)) {
      const startDate = utils.moment(data?.startDateOfCurrentEmployment);
      result.yearsOfCurrentEmployment = currentDate.diff(
        startDate,
        "years",
        false
      );
    }
    return {
      ...data,
      ...result,
    };
  }

  function add_interest_rate_plan(ctx) {
    console.log("add_interest_rate_plan");
    console.log(ctx);
    const data = ctx.data;
    const unit_of_time_enum = data.unit_of_time_enum ?? [];
    let period_unit_desc = undefined;
    if (data.period_unit) {
      period_unit_desc =
        unit_of_time_enum.find((e) => data.period_unit === e.value)?.label ||
        undefined;
    }

    let interest_rate = {
      period_from: data.period_from,
      period_to: data.period_to,
      period_unit: data.period_unit,
      period_unit_desc: period_unit_desc,
      tier_type: data.tier_type,
      base_factor_standard: data.base_factor_standard,
      base_factor_interest_rates: data.base_factor_interest_rates,
      diff_code: data.diff_code,
      diff_value: data.diff_value,
      diff_code2: data.diff_code2,
      diff_value2: data.diff_value2,
    };
    const requiredFields = [
      "period_from",
      "period_to",
      "period_unit",
      "tier_type",
      "base_factor_standard",
      "base_factor_interest_rates",
    ];
    const error = requiredFields.filter((field) => !data[field]);

    let resultError = {
      payload: {
        data: {
          isPlanValid: false,
        },
      },
      validation: {
        field: {},
      },
    };

    if (error.length > 0) {
      error.forEach(
        (e) => (resultError.validation.field[e] = "กรุณาระบุข้อมูลให้ครบถ้วน")
      );
      return resultError;
    }

    if (Number(data.period_from) >= Number(data.period_to)) {
      resultError.validation.field[
        "period_to"
      ] = `ระยะเวลาสิ้นสุดต้องมากกว่า ${data["period_from"]}`;
      return resultError;
    }

    if (data.payback_plan_type == "Afterwards") {
      const afterward_list = data.afterward_list ?? [];
      if (data.ra_seq && data.ra_seq != "") {
        if (data.ra_seq == "1" && data.period_from != "1") {
          resultError.validation.field[
            "period_from"
          ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
          return resultError;
        }
        let updateIndex = afterward_list.findIndex(
          (af) => data.ra_seq === af.ra_seq
        );
        let last_plan = afterward_list[updateIndex - 1];
        if (last_plan && last_plan.period_to >= interest_rate.period_from) {
          resultError.validation.field[
            "period_from"
          ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
          return resultError;
        }
        let add_plan = { ...interest_rate, ra_seq: data.ra_seq };
        let update_afterward_list = afterward_list.map((af) => {
          if (data.ra_seq === af.ra_seq) {
            return add_plan;
          } else {
            return af;
          }
        });
        return {
          payload: {
            data: {
              ...resetModal(),
              isPlanValid: true,
              afterward_list: update_afterward_list,
              amount_tier_list: undefined,
              interest_rate_list: undefined,
              is_multi_amount_tier: false,
            },
          },
        };
      }

      if (afterward_list.length == 0 && data.period_from != 1) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
        return resultError;
      }

      let ra_seq = getPlanId(afterward_list);

      let last_plan = afterward_list[afterward_list.length - 1];
      if (last_plan && last_plan.period_to >= interest_rate.period_from) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
        return resultError;
      }

      let add_plan = { ...interest_rate, ra_seq: ra_seq };
      return {
        payload: {
          data: {
            ...resetModal(),
            isPlanValid: true,
            afterward_list: [...afterward_list, add_plan],
            amount_tier_list: undefined,
            interest_rate_list: undefined,
            is_multi_amount_tier: false,
          },
        },
      };
    }
    if (data.is_multi_amount_tier) {
      let amount_tier_list = data.amount_tier_list ?? [];
      const index = data.selectedIndex;
      let updatedAmountTier = { ...amount_tier_list[index] };

      if (
        (!updatedAmountTier.interest_rate_list ||
          updatedAmountTier.interest_rate_list.length == 0) &&
        data.period_from != "1"
      ) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
        return resultError;
      }

      if (data.ra_seq && data.ra_seq != "") {
        if (data.ra_seq == "1" && data.period_from != "1") {
          resultError.validation.field[
            "period_from"
          ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
          return resultError;
        }

        let updateIndex = updatedAmountTier.interest_rate_list.findIndex(
          (af) => data.ra_seq === af.ra_seq
        );
        let last_plan = updatedAmountTier.interest_rate_list[updateIndex - 1];
        if (
          last_plan?.period_to &&
          last_plan?.period_to >= interest_rate.period_from
        ) {
          resultError.validation.field[
            "period_from"
          ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
          return resultError;
        }

        updatedAmountTier.interest_rate_list =
          register_add_sublimit_update_plan(
            updatedAmountTier.interest_rate_list,
            data.ra_seq,
            interest_rate
          );
        let update_amount_tier_list = amount_tier_list.map((tier, i) =>
          i === index ? updatedAmountTier : tier
        );
        return {
          payload: {
            data: {
              ...resetModal(),
              isPlanValid: true,
              amount_tier_list: update_amount_tier_list,
              afterward_list: undefined,
              interest_rate_list: undefined,
            },
          },
        };
      }

      let ra_seq = getPlanId(updatedAmountTier.interest_rate_list);

      let last_plan =
        updatedAmountTier.interest_rate_list[
          updatedAmountTier.interest_rate_list.length - 1
        ];
      if (last_plan && last_plan.period_to >= interest_rate.period_from) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
        return resultError;
      }

      updatedAmountTier.interest_rate_list =
        updatedAmountTier.interest_rate_list &&
        updatedAmountTier.interest_rate_list?.length === 0
          ? [{ ...interest_rate, ra_seq: "1" }]
          : [
              ...updatedAmountTier.interest_rate_list,
              { ...interest_rate, ra_seq: ra_seq },
            ];

      let update_amount_tier_list = amount_tier_list.map((tier, i) =>
        i === index ? updatedAmountTier : tier
      );

      return {
        payload: {
          data: {
            ...resetModal(),
            isPlanValid: true,
            amount_tier_list: update_amount_tier_list,
            afterward_list: undefined,
            interest_rate_list: undefined,
          },
        },
      };
    }

    let interest_rate_list = data.interest_rate_list ?? [];
    if (interest_rate_list.length == 0 && data.period_from != "1") {
      resultError.validation.field[
        "period_from"
      ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
      return resultError;
    }

    if (data.ra_seq && data.ra_seq != "") {
      if (data.ra_seq == "1" && data.period_from != "1") {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมีค่าเป็น1`;
        return resultError;
      }

      let updateIndex = interest_rate_list.findIndex(
        (af) => data.ra_seq === af.ra_seq
      );
      let last_plan = interest_rate_list[updateIndex - 1];
      if (last_plan && last_plan.period_to >= interest_rate.period_from) {
        resultError.validation.field[
          "period_from"
        ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
        return resultError;
      }

      let update_plan = register_add_sublimit_update_plan(
        interest_rate_list,
        data.ra_seq,
        interest_rate
      );
      return {
        payload: {
          data: {
            ...resetModal(),
            isPlanValid: true,
            interest_rate_list: update_plan,
            afterward_list: undefined,
            amount_tier_list: undefined,
            is_multi_amount_tier: false,
          },
        },
      };
    }
    let ra_seq = getPlanId(interest_rate_list);

    let last_plan = interest_rate_list[interest_rate_list.length - 1];
    if (last_plan && last_plan.period_to >= interest_rate.period_from) {
      resultError.validation.field[
        "period_from"
      ] = `ระยะเวลาเริ่มต้นต้องมากกว่า ${last_plan.period_to}`;
      return resultError;
    }

    let update_plan =
      interest_rate_list?.length === 0
        ? [{ ...interest_rate, ra_seq: "1" }]
        : [...interest_rate_list, { ...interest_rate, ra_seq: ra_seq }];
    return {
      payload: {
        data: {
          ...resetModal(),
          isPlanValid: true,
          interest_rate_list: update_plan,
          afterward_list: undefined,
          amount_tier_list: undefined,
          is_multi_amount_tier: false,
        },
      },
    };
  }

  function findAndRemove(array, predicate) {
    let index = array.findIndex(predicate);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }

  function deleteInterestRatePlan(ctx) {
    console.log("deleteInterestRatePlan");
    console.log(ctx);
    const data = ctx.data;

    if (data.payback_plan_type == "Afterwards") {
      let afterward_list = [...data.afterward_list];
      findAndRemove(
        afterward_list,
        (element) => element.ra_seq === data.ra_seq
      );
      return {
        payload: {
          data: {
            ...resetModal(),
            afterward_list: afterward_list,
          },
        },
      };
    }
    if (data.is_multi_amount_tier) {
      let amount_tier_list = data.amount_tier_list ?? [];
      const index = data.selectedIndex;
      let updatedAmountTier = { ...amount_tier_list[index] };

      let irl = [...updatedAmountTier.interest_rate_list];
      console.log(data.ra_seq);
      console.log(irl);
      findAndRemove(irl, (element) => element.ra_seq === data.ra_seq);
      updatedAmountTier = { ...updatedAmountTier, interest_rate_list: irl };

      let update_amount_tier_list = amount_tier_list.map((tier, i) =>
        i === index ? updatedAmountTier : tier
      );

      return {
        payload: {
          data: {
            ...resetModal(),
            amount_tier_list: update_amount_tier_list,
            interest_rate_list: [],
          },
        },
      };
    }

    let interest_rate_list = [...data.interest_rate_list];
    findAndRemove(
      interest_rate_list,
      (element) => element.ra_seq === data.ra_seq
    );
    return {
      payload: {
        data: {
          ...resetModal(),
          interest_rate_list: interest_rate_list,
        },
      },
    };
  }

  function deleteAmountTier(ctx) {
    const data = ctx.data;
    const selectIndex = ctx.data.selectedIndex;

    let amount_tier_list = data.amount_tier_list.map((item) => ({ ...item }));
    amount_tier_list.splice(selectIndex, 1);

    if (amount_tier_list.length > 1) {
      amount_tier_list[amount_tier_list.length - 1].isDisplayRemoveBTN = true;
    }
    return {
      payload: {
        data: {
          amount_tier_list: amount_tier_list,
        },
      },
    };
  }

  function goBack() {
    window.history.back();
  }

  function clearSessionInterestPlan() {
    return {
      payload: {
        data: { ...resetModal() },
      },
    };
  }

  function editLoan(ctx) {
    const additionalData = ctx.additionalData;
    window.location.href = `/register/${additionalData.id}/details/${
      additionalData.application_account_id
    }/${additionalData.product_type.toLowerCase()}`;
  }

  function editSublimit(ctx) {
    const additionalData = ctx.additionalData;
    window.location.href = `/register/limit/${additionalData.application_account_id}/details`;
  }

  function removeLGinfo(ctx) {
    let additionalData = ctx?.additionalData;
    let result = [...(ctx.data.appl_account_lg_fee || [])].filter(
      (i) => i.seq !== additionalData.seq
    );
    const updatedArray = result.map((item, index) => ({
      ...item,
      seq: index + 1,
    }));
    return {
      payload: {
        data: {
          appl_account_lg_fee: updatedArray,
        },
      },
    };
  }

  function addLGInfo(ctx) {
    let loanInfoList = ctx?.data?.appl_account_lg_fee || [];

    loanInfoList = loanInfoList.map((item, index) => {
      return { ...item, seq: index + 1 };
    });

    loanInfoList = [
      ...loanInfoList,
      {
        seq: loanInfoList.length + 1,
        fee_amount: undefined,
        fee_percentage: undefined,
      },
    ];

    return {
      payload: {
        data: {
          appl_account_lg_fee: loanInfoList,
        },
      },
    };
  }

  function thousandSeparatorWithDecimal(value, decimalPlaces = 0) {
    if (value === null || value === undefined) {
      return value;
    }
    if (typeof value === "number" || typeof value === "string") {
      let stringValue = String(value);
      if (!isNaN(stringValue)) {
        let numberValue = parseFloat(stringValue);
        let formattedValue = numberValue.toFixed(decimalPlaces);
        let [integerPart, decimalPart] = formattedValue.split(".");
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (decimalPart !== undefined) {
          return `${integerPart}.${decimalPart}`;
        } else {
          return integerPart;
        }
      } else {
        return value;
      }
    } else {
      return value;
    }
  }

  function listener_mortgage_page_appl_account(data) {
    let new_appl_acount = data;
    new_appl_acount = listener_interest_amount_per_month(new_appl_acount);

    if (data?.credit_line_type === "LOAN") {
      new_appl_acount = listener_requested_amount(new_appl_acount);
    }

    return new_appl_acount;
  }

  function listener_requested_amount(data) {
    const requested_amount =
      (data.pri_credit_limit ?? 0) +
      (data.housing_credit_limit ?? 0) +
      (data.final_installment_transfer_limit ?? 0) +
      (data.nl_pot_credit_limit ?? 0) +
      (data.pis_credit_limit ?? 0) +
      (data.pot_credit_limit ?? 0);
    return {
      ...data,
      requested_amount,
    };
  }

  function listener_interest_amount_per_month(data) {
    let account_interest_monthly_amount = 0;

    if (data.requested_amount && data.account_interest_monthly) {
      account_interest_monthly_amount =
        (data.requested_amount * (data.account_interest_monthly / 100)) / 12;
    }

    return {
      ...data,
      account_interest_monthly_amount: account_interest_monthly_amount,
      account_interest_monthly_amount_str: thousandSeparatorWithDecimal(
        account_interest_monthly_amount
      ),
    };
  }

  function listener_edit_od_interest_plan(data, od_interest_plan) {
    if (data?.account_method_interest === "SingleRate") {
      if (od_interest_plan?.length == 1) {
        return od_interest_plan;
      }

      if (od_interest_plan?.length > 1) {
        return [
          {
            seq: 1,
            amount: undefined,
            interest_rate: undefined,
            interest_spread: undefined,
            interest_spread_amount: undefined,
          },
        ];
      }
    } else if (data?.account_method_interest === "Other") {
      return undefined;
    }
    return od_interest_plan;
  }

  function show_bbi_section() {
    return {
      payload: {
        data: {
          show_bbi_section: true,
        },
      },
    };
  }

  function mappingLoadDetail(ctx) {
    if (!ctx) {
      return;
    } else {
      return {
        seq: ctx?.seq,
        application_group: ctx?.application_group,
        product_group_id: ctx?.product_group_id,
        product_type_id: ctx?.product_type_id,
        sub_product_type_id: ctx?.sub_product_type_id,
        product_group_code: ctx?.product_group_code,
        product_type_code: ctx?.product_type_code,
        sub_product_type_code: ctx?.sub_product_type_code,
        contract_no: ctx?.contract_no,
        is_main_fleet: ctx?.seq,
      };
    }
  }

  function show_register_have_success() {
    setLocalStorage("Register_Loan_Collateral_Details_Save");
  }

  function positionManagement_checking_savePosition_fields(context) {
    const {
      positionCode: posCode,
      positionDesc: posDesc,
      status: posStatus,
    } = context?.data;

    const status =
      posCode && posDesc && posStatus ? "form_valid" : "form_invalid";

    return {
      payload: {
        data: {
          status: status,
        },
      },
    };
  }

  function positionManagement_checking_editPosition_fields(context) {
    const { code, name } = context?.data;

    const state = code && name ? "form_valid" : "form_invalid";

    return {
      payload: {
        data: {
          state,
        },
      },
    };
  }

  function groupsAndPositions_checking_save_fields(context) {
    const {
      groupsPositionCode: code,
      groupsPositionName: name,
      status,
    } = context?.data;

    const isFormValid = code && name && status;

    return {
      payload: {
        data: {
          isFormValid,
        },
      },
    };
  }

  function check_popup_visibility(ctx, data) {
    return ctx
      .zboRouteObject?.buckets?.backnavigate?.dataContext?.payload?.popup_visibility;
  }

  //------------------------------------------------ UTILS ------------------------------------------------//

  /**
   *
   * @param {*} workflowName Workflow's name you want to call
   * @param {*} body Workflow's body
   * @param {*} callback Callback function you want it to do after server responsed
   * @description Function use to call workflow in ZDE
   * @returns Response data from ZDE
   */
  function callWorkFlow(workflowName, payload, callback) {
    const xhr = new XMLHttpRequest();

    let body = {
      context: {
        conditionTypeId: workflowName,
        payload,
      },
    };

    xhr.open("POST", "/api2/condition_action/");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = () => {
      callback(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  }

  /**
   *
   * @param {*} src Source object you want to clone
   * @description Return src object as new object
   * @returns New object that have same parameter as src object
   */
  function cloneObject(src) {
    return structuredClone(src);
  }

  function setInputFosSaveModalPage() {
    setLocalStorage("INPUT_FOS_SAVE_DRAFT");
  }

  function inputFOSListenerStorage(data) {
    if (!data) return;
    let noti = getLocalStorage();
    return {
      showNotification: noti,
    };
  }

  function addBorrowerDoc(data) {
    console.log("data", data);
    const { borrowers } = data.data;

    if (borrowers) {
      const borrowerIndex = borrowers.findIndex(
        (b) => b.id === data.additionalData.id
      );
      if (borrowerIndex !== -1) {
        const updatedBorrowers = [...borrowers];
        const borrower = { ...updatedBorrowers[borrowerIndex] };
        borrower.documents = [
          ...(borrower.documents || []),
          { id: uuidv4(), reason_status: "มี" },
        ];
        updatedBorrowers[borrowerIndex] = borrower;

        return {
          payload: {
            data: { borrowers: updatedBorrowers },
          },
        };
      }
    }
    return { payload: { data } };
  }

  function addBorrowerInfo(data) {
    const { borrowers } = data.data;

    if (borrowers) {
      const borrowerIndex = borrowers.findIndex(
        (b) => b.id === data.additionalData.id
      );
      if (borrowerIndex !== -1) {
        const updatedBorrowers = [...borrowers];
        const borrower = { ...updatedBorrowers[borrowerIndex] };
        borrower.information = [
          ...(borrower.information || []),
          { id: uuidv4(), reason_status: "มี" },
        ];
        updatedBorrowers[borrowerIndex] = borrower;

        return {
          payload: {
            data: { borrowers: updatedBorrowers },
          },
        };
      }
    }
    return { payload: { data } };
  }

  function addBorrowerRcReshape(data) {
    const { borrowers } = data.data;

    if (borrowers) {
      const borrowerIndex = borrowers.findIndex(
        (b) => b.id === data.additionalData.id
      );
      if (borrowerIndex !== -1) {
        const updatedBorrowers = [...borrowers];
        const borrower = { ...updatedBorrowers[borrowerIndex] };
        borrower.rc_reshape = [
          ...(borrower.rc_reshape || []),
          { id: uuidv4() },
        ];
        updatedBorrowers[borrowerIndex] = borrower;

        return {
          payload: {
            data: { borrowers: updatedBorrowers },
          },
        };
      }
    }
    return { payload: { data } };
  }

  function isReferenceDocumentNoDisabled(data) {
    return data._rowData.isReferenceDocumentNoDisabled;
  }
  function validate_phone_number(phoneNo, mandatory) {
    let isValid = false;
    let errorMessage = "";

    const ONLY_NUMERIC = /^[-\d]+$/;
    const BANGKOK_NUMBER = /^02-[0-9]{3}-[0-9]{4}$/;
    const UP_COUNTRY_NUMBER = /^(03|04|05|07)[0-9]-[0-9]{3}-[0-9]{3}$/;
    const MOBILE_NUMBER = /^(01|06|08|09)[0-9]-[0-9]{3}-[0-9]{4}$/;

    let hasOnlyNumbers = ONLY_NUMERIC.test(phoneNo);
    let validNumberFormat =
      BANGKOK_NUMBER.test(phoneNo) ||
      UP_COUNTRY_NUMBER.test(phoneNo) ||
      MOBILE_NUMBER.test(phoneNo);

    if (
      mandatory &&
      (!phoneNo || phoneNo === undefined || phoneNo.length === 0)
    ) {
      errorMessage = "กรุณาระบุข้อมูลให้ครบถ้วน";
    } else if (!hasOnlyNumbers) {
      errorMessage = "กรุณาระบุข้อมูลเป็นตัวเลขเท่านั้น";
    } else if (!validNumberFormat) {
      errorMessage = "กรุณาระบุข้อมูลให้ถูกต้อง";
    } else {
      isValid = true;
    }

    return { isValid, errorMessage };
  }

  function clearOldLoanSearch(ctx) {
    return {
      payload: {
        data: {
          ...ctx.data,
          accountNumber: undefined,
          account_number: undefined,
          credit_line_type: undefined,
          appl_account: undefined
        },
      },
    };
  }

  function showOldLoanModal(context) {
    const button = document.getElementById("hiddenOldLoanModalButton");
    button.click();
  }

  function go_to_webverify_homepage() {
    setTimeout(navigate_webverify, 1500);
  }
  
  function navigate_webverify() {
    window.location.href = "/webverify";
  }

  function go_to_webverify_listpage() {
    setTimeout(navigate_webverify_list, 1500);
  }
  
  function navigate_webverify_list() {
    window.location.href = "/webverify/{route.taskId}/list";
  }

  function go_to_rcverify_homepage() {
    setTimeout(navigate_rcverify_homepage, 1500);
  }
  
  function navigate_rcverify_homepage() {
    window.location.href = "/rcverify";
  }

});
