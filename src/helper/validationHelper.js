import cogoToast from 'cogo-toast';
class ValidationHelper{
    //CHECK EMPTY
    isEmpty(value){
        if(value.length===0){
            return true;
        }
        else{
          return false;
        }
    }

    //SUCCESS MESSAGE 
    successToast(msg){
        cogoToast.success(msg)
    }

    //ERROR MESSAGE
    errorToast(msg){
        cogoToast.error(msg)
    }

}

export const {isEmpty,successToast, errorToast } =new ValidationHelper;