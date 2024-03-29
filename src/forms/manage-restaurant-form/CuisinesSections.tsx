import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineLisst } from "@/config/restaurant-options-config";
import React from "react";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";

const CuisinesSections = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2-xl font-bold">Cuisines</h2>
        <FormDescription>
          Select cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField control={control} name="cuisines" render={({ field }) => (
        <FormItem>
          <div className="grid md:grid-cols-5 gap-1">
            {cuisineLisst.map((cuisineItem) => (
              <CuisineCheckbox key={cuisineItem} cuisine={cuisineItem} field={field} />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )} />
    </div>
  );
};

export default CuisinesSections;
