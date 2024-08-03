import React, { useEffect } from "react";
import { fetchStates, fetchDomains } from "../store/quick-codes/quickCodeSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useAppSelector, useAppDispatch } from "../store/hooks";

interface DropdownProps {
  type: "state" | "domain";
  register: any;
  name: string;
  placeholder: string;
}

const test = [
  {
    name: "Education",
    code: "EDUC",
    description: "Education Business Domain",
  },
  {
    name: "Finance",
    code: "FIN",
    description: "Finance Business Domain",
  },
  {
    name: "Healthcare",
    code: "HLTH",
    description: "Healthcare Business Domain",
  },
  {
    name: "Information Technology",
    code: "IT",
    description: "Information Technology Business Domain",
  },
  {
    name: "Manufacturing",
    code: "MNFG",
    description: "Manufacturing Business Domain",
  },
  {
    name: "Real Estate",
    code: "RE",
    description: "Real Estate Business Domain",
  },
  {
    name: "Restaurant",
    code: "REST",
    description: "Restaurant Business Domain",
  },
  {
    name: "Retail",
    code: "RETL",
    description: "Retail Business Domain",
  },
  {
    name: "Tourism",
    code: "TOUR",
    description: "Tourism Business Domain",
  },
  {
    name: "Transportation",
    code: "TRANS",
    description: "Transportation Business Domain",
  },
];

const Dropdown: React.FC<DropdownProps> = ({
  type,
  register,
  name,
  placeholder,
}) => {
  const dispatch = useAppDispatch();
  const { states, domains, loading, error } = useAppSelector(
    (state) => state.quickCodes
  );

  useEffect(() => {
    if (type === "state") {
      dispatch(fetchStates());
    } else if (type === "domain") {
      dispatch(fetchDomains());
    }
  }, [dispatch, type]);

  const options = type === "state" ? states : domains;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="dropdown-trigger">
        {placeholder}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-content">
        <select {...register(name)} className="hidden">
          <option value="">{`Select ${
            type.charAt(0).toUpperCase() + type.slice(1)
          }`}</option>
          {options.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
        {options.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onClick={() =>
              register(name).onChange({ target: { value: option.code } })
            }
          >
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
