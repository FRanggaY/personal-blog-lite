"use client";

import Checklist, { ChecklistProps } from "@/components/Checklist"

interface ArticleChecklistProps extends ChecklistProps {
  projectSlug: string;
  initialCheckable?: boolean;
}

const ArticleChecklist = ({ projectSlug, initialCheckable, ...props }: ArticleChecklistProps) => {
  return (
    <Checklist
      {...props}
      checkable={false}
    />
  )
}

export default ArticleChecklist;
