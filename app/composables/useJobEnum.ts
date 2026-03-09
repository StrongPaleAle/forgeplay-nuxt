import { JobLabels } from '~~/shared/types/jobs'

type JobLabelKey = keyof typeof JobLabels | null | undefined
type JobInput = JobLabelKey | JobLabelKey[] | null | undefined

export const useJobEnum = () => {
  const getJobEnumLabel = (value: JobInput, divider = '/'): string => {
    if (!value) {
      return ''
    }

    const values = Array.isArray(value) ? value : [value]

    return values
      .map((item) => JobLabels[item as keyof typeof JobLabels] ?? item)
      .join(divider)
  }

  const getLocationString = (location: string | undefined, location_type: JobInput | undefined): string => {
    if (!location && !location_type) return '';
    return [location, getJobEnumLabel(location_type)].filter(Boolean).join(' / ');
  }

  return { getJobEnumLabel, getLocationString }
}
