/**
 * It's annoying that all these are set to optional I know, but there's
 * no great way to ensure that the MDX files have these properties,
 * especially when a common use case will be to edit them without running
 * the app or build. So we're going to force you to handle situations when
 * these values are missing to avoid runtime errors.
 */
type FrontMatter = {
  slug: string;
  categorySlug: string;
  abstract?: string;
  title: string;
  subtitle?: string;
  seoTitle?: string;
  layout: string;

  noNewsletter: boolean;
  pathname: string;
  isPublished: boolean;
  publishedOn: string;
  shortDate: string;
  humanReadableDate: string;
};

export { FrontMatter };
