import { portfolioPageData } from '~~/static/data';

export const useCMS =  () =>{
    return portfolioPageData;
}

export const useSkillSection = ()=> useCMS().fields.body.find(item => item.type === 'about');

export const useSkills = ()=>useSkillSection().fields.skills || [];

export const useSkillSectionInfo = ()=>{
    const skillSection = useSkillSection();

    return{
        diviser : skillSection.diviser,
        title: skillSection.title,
        subtitle : skillSection.subtitle,
        skills : skillSection.skills,
    }
}

export const useHero = () => {
    const heroSection = useCMS().fields.body.find(item => item.type === 'hero');
  
    return {
      slug: heroSection.slug,
      ...heroSection.fields,
    }
  }

export const useMenuItems = () => useCMS().fields.navMenu.linkItems

export const useActionItems = () => useCMS().fields.navMenu.actionItems

export const useLogo = () => useCMS().fields.navMenu.logo