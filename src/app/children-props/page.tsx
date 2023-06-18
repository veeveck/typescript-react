import Child from "@/components/hierarchy/Child";
import Parent from "@/components/hierarchy/Parent";
import React from "react";

const ChildrenProps=()=>{
    return <div>
        <Parent>
          <Child/>
        </Parent>
    </div>
}
export default ChildrenProps;